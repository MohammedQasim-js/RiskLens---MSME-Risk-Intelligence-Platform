import * as React from "react"

export function Drawer({ open, onClose, children }: { open: boolean; onClose: () => void; children: React.ReactNode }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      <div className="fixed inset-0 bg-background/80 backdrop-blur-sm" onClick={onClose} />
      <div className="z-50 w-full max-w-sm md:max-w-md h-full bg-surface border-l border-white/10 shadow-2xl p-6 flex flex-col transform transition-transform overflow-y-auto">
        {children}
      </div>
    </div>
  )
}
