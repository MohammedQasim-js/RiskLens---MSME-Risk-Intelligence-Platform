"use server"

import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'

export async function submitOnboarding(formData: FormData) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  
  // For demo/prototype purposes, if not logged in, use a mock UUID
  const mockUserId = '11111111-1111-1111-1111-111111111111'
  const userId = user?.id || mockUserId

  const business_id = crypto.randomUUID()

  const legal_name = formData.get('legal_name') as string
  const industry = formData.get('industry') as string
  const city = formData.get('city') as string
  const state = formData.get('state') as string
  const msme_class = formData.get('msme_class') as string
  const age_months = parseInt(formData.get('age_months') as string, 10) || 0
  const business_model = (formData.get('business_model') as string) || 'Standard'
  const target_monthly_revenue = parseFloat(formData.get('target_monthly_revenue') as string) || 0
  const project_budget = parseFloat(formData.get('project_budget') as string) || 0
  const project_start = formData.get('project_start') as string
  const project_end = formData.get('project_end') as string
  const expected_collection_days = parseInt(formData.get('expected_collection_days') as string, 10) || 0
  const planned_monthly_expenses = parseFloat(formData.get('planned_monthly_expenses') as string) || 0

  // 1. Create Business (No select to avoid RLS read-after-insert block before membership)
  const { error: businessError } = await supabase.from('businesses').insert({
    business_id,
    legal_name,
    industry,
    city,
    state,
    msme_class,
    age_months,
    business_model,
    target_monthly_revenue,
    project_budget,
    project_start,
    project_end,
    expected_collection_days,
    planned_monthly_expenses
  })

  if (businessError) {
    console.error('SUPABASE BUSINESS ERROR:', businessError)
    throw new Error(`Failed to create business: ${businessError.message}`)
  }

  // 2. Create Membership
  const { error: memberError } = await supabase.from('business_members').insert({
    business_id,
    user_id: userId,
    role: 'owner'
  })

  if (memberError) {
    console.error(memberError)
    throw new Error('Failed to create membership')
  }

  // 3. Create Audit Event
  const { error: auditError } = await supabase.from('audit_events').insert({
    actor_id: userId,
    action: 'BUSINESS_CREATED',
    entity_type: 'business',
    entity_id: business_id,
    metadata: {
      source: 'onboarding_flow'
    }
  })

  if (auditError) {
    console.error(auditError)
  }

  // 4. Set Active Business Cookie
  const { cookies } = await import('next/headers')
  const cookieStore = await cookies()
  cookieStore.set('active_business_id', business_id)

  redirect('/overview')
}
