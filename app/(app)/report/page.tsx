import { getActiveBusinessId } from '@/lib/data/active-business';
import { AlertCircle } from 'lucide-react';
import { ReportClient } from './ReportClient';

export default async function ReportPage() {
  const businessId = await getActiveBusinessId();
  if (!businessId) {
    return (
      <div className="p-8 max-w-4xl mx-auto text-center space-y-4">
        <AlertCircle className="w-12 h-12 text-on-surface-variant mx-auto mb-4" />
        <h2 className="text-xl font-geist text-white">No Active Business</h2>
        <p className="text-on-surface-variant">Please complete onboarding or select a business to generate a report.</p>
      </div>
    );
  }

  return <ReportClient />;
}

// Force HMR 2
