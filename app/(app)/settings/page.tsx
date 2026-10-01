import { createClient } from '@/lib/supabase/server';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { SettingsClient } from './SettingsClient';

export default async function SettingsPage({
  searchParams,
}: {
  searchParams: Promise<{ updated?: string }>;
}) {
  const supabase = await createClient();
  const { data: { user }, error } = await supabase.auth.getUser();

  if (error || !user) redirect('/login');

  const params = await searchParams;
  const cookieStore = await cookies();
  let businessId = cookieStore.get('active_business_id')?.value;

  let business = null;

  // 1. Try cookie first
  if (businessId) {
    const { data } = await supabase
      .from('businesses')
      .select('*')
      .eq('business_id', businessId)
      .single();
    business = data;
  }

  // 2. Fallback: look up via business_members for this user
  if (!business) {
    const { data: membership } = await supabase
      .from('business_members')
      .select('business_id')
      .eq('user_id', user.id)
      .limit(1)
      .single();

    if (membership?.business_id) {
      const { data } = await supabase
        .from('businesses')
        .select('*')
        .eq('business_id', membership.business_id)
        .single();
      business = data;

      // Also restore the cookie so other pages work correctly
      if (business) {
        cookieStore.set('active_business_id', membership.business_id);
      }
    }
  }

  return <SettingsClient user={user} business={business} updated={params?.updated === '1'} />;
}
