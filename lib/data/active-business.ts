import { cookies } from 'next/headers';
import { createClient } from '@/lib/supabase/server';

export async function getActiveBusinessId() {
  const cookieStore = await cookies();
  let businessId = cookieStore.get('active_business_id')?.value;
  
  if (!businessId) {
    const supabase = await createClient();
    const { data } = await supabase.from('businesses').select('business_id').limit(1).single();
    businessId = data?.business_id;
  }
  
  return businessId;
}
