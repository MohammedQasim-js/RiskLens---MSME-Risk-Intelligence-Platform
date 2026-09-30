export default function Loading() {
  return (
    <div className="w-full h-[60vh] flex flex-col items-center justify-center space-y-4">
      <div className="w-12 h-12 border-4 border-white/10 border-t-emerald-500 rounded-full animate-spin"></div>
      <p className="text-on-surface-variant font-mono text-sm animate-pulse">Computing Risk Engine...</p>
    </div>
  )
}
