"use server"

import { createClient } from '@/lib/supabase/server'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export async function updateBusiness(formData: FormData) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect('/login')

  const cookieStore = await cookies()
  let business_id = cookieStore.get('active_business_id')?.value

  const fields: Record<string, (v: string) => unknown> = {
    legal_name: v => v,
    industry: v => v,
    city: v => v,
    state: v => v,
    msme_class: v => v,
    business_model: v => v,
    age_months: v => parseInt(v, 10) || 0,
    target_monthly_revenue: v => parseFloat(v) || 0,
    project_budget: v => parseFloat(v) || 0,
    project_start: v => v,
    project_end: v => v,
    expected_collection_days: v => parseInt(v, 10) || 0,
    planned_monthly_expenses: v => parseFloat(v) || 0,
  }

  const payload: Record<string, unknown> = {}
  for (const [key, transform] of Object.entries(fields)) {
    const val = formData.get(key) as string
    if (val !== null && val !== '') {
      payload[key] = transform(val)
    }
  }

  if (!business_id) {
    // No existing business — create one
    const { data: newBusiness, error: insertError } = await supabase
      .from('businesses')
      .insert({ ...payload, owner_id: user.id })
      .select('business_id')
      .single()

    if (insertError || !newBusiness) {
      throw new Error(`Failed to create business: ${insertError?.message ?? 'unknown error'}`)
    }

    business_id = newBusiness.business_id

    // Link the user as owner member
    await supabase.from('business_members').insert({
      business_id,
      user_id: user.id,
      role: 'owner',
    })

    // Persist cookie so subsequent requests resolve the business
    cookieStore.set('active_business_id', business_id)

    // Audit
    await supabase.from('audit_events').insert({
      actor_id: user.id,
      action: 'BUSINESS_CREATED',
      entity_type: 'business',
      entity_id: business_id,
      metadata: { source: 'settings_page' }
    })
  } else {
    // Existing business — update it
    const { error } = await supabase
      .from('businesses')
      .update(payload)
      .eq('business_id', business_id)

    if (error) {
      throw new Error(`Failed to update business: ${error.message}`)
    }

    // Audit
    await supabase.from('audit_events').insert({
      actor_id: user.id,
      action: 'BUSINESS_UPDATED',
      entity_type: 'business',
      entity_id: business_id,
      metadata: { source: 'settings_page', updated_fields: Object.keys(payload) }
    })
  }

  redirect('/settings?updated=1')
}

