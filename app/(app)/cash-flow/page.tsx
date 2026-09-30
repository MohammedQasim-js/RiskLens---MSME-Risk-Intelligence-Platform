import { getActiveBusinessId } from '@/lib/data/active-business';
import { getDashboardData } from '@/lib/data/analytics';
import { Badge } from '@/components/ui/badge';

export default async function CashFlowPage() {
  const businessId = await getActiveBusinessId();
  if (!businessId) return <div className="p-8 text-white">No active business.</div>;
  const data = await getDashboardData(businessId);

  const inflow = data.features.find(f => f.feature_name === 'avg_monthly_inflow')?.value || 0;
  const outflow = data.features.find(f => f.feature_name === 'avg_monthly_outflow')?.value || 0;
  const net = data.features.find(f => f.feature_name === 'net_cash_flow')?.value || 0;
  const volatility = data.features.find(f => f.feature_name === 'cashflow_volatility')?.value || 0;
  
  return (
    <div className="space-y-8 max-w-7xl mx-auto pb-12 animate-in fade-in">
      <div>
        <h1 className="text-3xl font-geist font-semibold text-white tracking-tight">Cash Flow Intelligence</h1>
        <p className="text-on-surface-variant mt-2 font-sans">Historical liquidity and transaction categorization.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="glass-panel p-6 rounded-xl">
          <p className="text-sm text-on-surface-variant">Avg Monthly Inflow</p>
          <h2 className="text-2xl font-mono text-emerald-400 mt-2">₹{inflow.toLocaleString(undefined, {maximumFractionDigits:0})}</h2>
        </div>
        <div className="glass-panel p-6 rounded-xl">
          <p className="text-sm text-on-surface-variant">Avg Monthly Outflow</p>
          <h2 className="text-2xl font-mono text-rose-400 mt-2">₹{outflow.toLocaleString(undefined, {maximumFractionDigits:0})}</h2>
        </div>
        <div className="glass-panel p-6 rounded-xl">
          <p className="text-sm text-on-surface-variant">Net Cash Flow</p>
          <h2 className="text-2xl font-mono text-white mt-2">₹{net.toLocaleString(undefined, {maximumFractionDigits:0})}</h2>
        </div>
        <div className="glass-panel p-6 rounded-xl">
          <p className="text-sm text-on-surface-variant">Volatility</p>
          <h2 className="text-2xl font-mono text-white mt-2">{(volatility * 100).toFixed(1)}%</h2>
        </div>
      </div>

      <div className="glass-panel p-6 rounded-xl min-h-[400px] flex flex-col">
        <div className="flex justify-between items-center border-b border-white/10 pb-4 mb-4">
          <h3 className="font-geist text-lg text-white font-medium">Historical Cash Flow</h3>
          <div className="flex gap-2">
            <Badge variant="outline" className="cursor-pointer hover:bg-white/10">30D</Badge>
            <Badge variant="default" className="cursor-pointer bg-white/20">90D</Badge>
            <Badge variant="outline" className="cursor-pointer hover:bg-white/10">6M</Badge>
            <Badge variant="outline" className="cursor-pointer hover:bg-white/10">12M</Badge>
          </div>
        </div>
        <div className="flex-1 border border-dashed border-white/10 rounded-lg bg-white/5 flex items-center justify-center">
          <p className="text-on-surface-variant text-sm">Visual Chart Rendering (Recharts)</p>
        </div>
      </div>
      
      <div className="glass-panel p-6 rounded-xl">
         <h3 className="font-geist text-lg text-white font-medium border-b border-white/10 pb-4 mb-4">Transaction Categorization</h3>
         <div className="overflow-x-auto">
           <table className="w-full text-sm text-left text-on-surface-variant">
             <thead className="text-xs text-white uppercase bg-white/5 border-b border-white/10">
               <tr>
                 <th className="px-6 py-3">Date</th>
                 <th className="px-6 py-3">Description</th>
                 <th className="px-6 py-3">Category</th>
                 <th className="px-6 py-3 text-right">Amount</th>
               </tr>
             </thead>
             <tbody>
               {data.transactions.slice(0, 10).map((t, i) => (
                 <tr key={i} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                   <td className="px-6 py-4 font-mono">{t.timestamp.split('T')[0]}</td>
                   <td className="px-6 py-4">{t.metadata.original_description}</td>
                   <td className="px-6 py-4">
                     <Badge variant="outline">{t.purpose_category}</Badge>
                   </td>
                   <td className={`px-6 py-4 text-right font-mono ${t.direction === 'CREDIT' ? 'text-emerald-400' : 'text-rose-400'}`}>
                     {t.direction === 'CREDIT' ? '+' : '-'}₹{t.amount.toLocaleString(undefined, {maximumFractionDigits:0})}
                   </td>
                 </tr>
               ))}
               {data.transactions.length === 0 && (
                 <tr><td colSpan={4} className="text-center py-8">No transactions found</td></tr>
               )}
             </tbody>
           </table>
         </div>
      </div>
    </div>
  )
}
