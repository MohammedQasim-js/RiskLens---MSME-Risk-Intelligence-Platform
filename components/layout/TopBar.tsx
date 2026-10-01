import { createClient } from "@/lib/supabase/server";
import { cookies } from "next/headers";
import { Bell, ChevronDown, User, ShieldCheck } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export async function TopBar() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  let activeBusiness: { business_id: string; legal_name: string } | null = null;
  const cookieStore = await cookies();
  const activeBusinessId = cookieStore.get('active_business_id')?.value;
  
  if (user) {
    if (activeBusinessId) {
      const { data } = await supabase
        .from('businesses')
        .select('business_id, legal_name')
        .eq('business_id', activeBusinessId)
        .single();
      if (data) activeBusiness = data;
    } 
    
    if (!activeBusiness) {
      // Fallback to first available business
      const { data } = await supabase
        .from('businesses')
        .select('business_id, legal_name')
        .limit(1)
        .single();
      if (data) activeBusiness = data;
    }
  }

  return (
    <div className="sticky top-0 z-10 flex h-16 flex-shrink-0 items-center justify-between border-b border-white/5 bg-surface/80 backdrop-blur-md px-6">
      <div className="flex items-center gap-4">
        {activeBusiness ? (
          <button suppressHydrationWarning className="flex items-center gap-2 text-sm font-medium text-white hover:text-primary transition-colors">
            <div className="h-8 w-8 rounded bg-primary/20 border border-primary/30 flex items-center justify-center text-primary font-bold uppercase tracking-widest">
              {activeBusiness.legal_name.substring(0, 2)}
            </div>
            {activeBusiness.legal_name}
            <ChevronDown className="h-4 w-4 text-outline" />
          </button>
        ) : (
          <div className="flex items-center gap-2 text-sm font-medium text-on-surface-variant">
            <div className="h-8 w-8 rounded bg-white/10 border border-white/20 flex items-center justify-center text-white font-bold">
              --
            </div>
            No Active Business
          </div>
        )}
      </div>

      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="border-amber-500/30 text-amber-500 bg-amber-500/10 text-[10px] uppercase tracking-wider">Demo Data</Badge>
          <span className="text-xs text-on-surface-variant font-sans">Data Freshness:</span>
          <span className="text-xs text-emerald-500 font-mono">Live</span>
        </div>
        
        <div className="flex items-center gap-2">
          <span className="text-xs text-on-surface-variant font-sans">Data Confidence:</span>
          <Badge variant="safe" className="font-mono text-[10px] uppercase tracking-wider">
            <ShieldCheck className="w-3 h-3 mr-1" />
            High (86/100)
          </Badge>
        </div>

        <div className="h-4 w-px bg-white/10" />

        <button suppressHydrationWarning className="text-on-surface-variant hover:text-white transition-colors relative">
          <Bell className="h-5 w-5" />
          <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-rose-500 border border-surface" />
        </button>

        <button suppressHydrationWarning className="h-8 w-8 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-on-surface-variant hover:text-white hover:border-white/40 transition-all">
          <User className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
