import Link from 'next/link'
import { login } from '@/app/auth-actions'

export default async function LoginPage({ searchParams }: { searchParams: Promise<{ message?: string }> }) {
  const params = await searchParams;

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4 relative overflow-hidden">
      {/* Ambient glows matching the app's overview page */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-tertiary/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="w-full flex flex-col gap-8" style={{ maxWidth: '30vw' }}>
        {/* Logo / Brand */}
        <div className="flex flex-col items-center gap-3 text-center">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-container via-surface-container-high to-surface-container flex items-center justify-center shadow-md">
            <span className="material-symbols-outlined text-[28px] text-tertiary">finance_mode</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="font-headline-lg text-headline-lg text-on-surface font-semibold tracking-tight">RiskLens</span>
            <span className="font-label-caps text-label-caps text-tertiary uppercase tracking-wider">MRIP Engine · v3.8</span>
          </div>
        </div>

        {/* Card */}
        <div className="rounded-2xl bg-surface-container-low/80 backdrop-blur-xl border border-border-glass shadow-[0_8px_32px_-4px_rgba(0,0,0,0.45)] p-8 flex flex-col gap-6">
          <div className="flex flex-col gap-1">
            <h1 className="font-headline-md text-headline-md text-on-surface font-semibold">Sign in to your account</h1>
            <p className="font-body-sm text-body-sm text-outline">Access your MRIP intelligence dashboard</p>
          </div>

          <form className="flex flex-col gap-5" action={login}>
            <div className="flex flex-col gap-2">
              <label className="font-label-caps text-label-caps text-outline uppercase tracking-wider" htmlFor="email">
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@institution.com"
                required
                suppressHydrationWarning
                className="w-full px-4 py-3 rounded-xl bg-surface-container border border-border-glass text-on-surface font-body-md text-body-md placeholder-outline focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/15 transition-all"
              />
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <label className="font-label-caps text-label-caps text-outline uppercase tracking-wider" htmlFor="password">
                  Password
                </label>
                <button type="button" suppressHydrationWarning className="font-body-sm text-body-sm text-tertiary hover:text-on-surface transition-colors">
                  Forgot password?
                </button>
              </div>
              <input
                id="password"
                name="password"
                type="password"
                placeholder="••••••••"
                required
                suppressHydrationWarning
                className="w-full px-4 py-3 rounded-xl bg-surface-container border border-border-glass text-on-surface font-body-md text-body-md placeholder-outline focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/15 transition-all"
              />
            </div>

            {params?.message && (
              <div className="p-3 rounded-xl bg-semantic-critical/10 text-semantic-critical border border-semantic-critical/20 font-body-sm text-body-sm text-center">
                {params.message}
              </div>
            )}

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-gradient-to-r from-primary-container to-secondary-container text-on-surface font-body-md text-body-md font-semibold shadow-md hover:brightness-110 transition-all mt-1 flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined text-[18px]">login</span>
              Sign In to MRIP
            </button>
          </form>

          <div className="flex items-center gap-3">
            <div className="flex-1 h-px bg-border-glass" />
            <span className="font-label-caps text-label-caps text-outline">or</span>
            <div className="flex-1 h-px bg-border-glass" />
          </div>

          <p className="text-center font-body-sm text-body-sm text-outline">
            Don&apos;t have an account?{' '}
            <Link href="/signup" className="text-tertiary hover:text-on-surface font-medium transition-colors">
              Request Access
            </Link>
          </p>
        </div>

        {/* Security badge — matches sidebar footer */}
        <div className="flex items-center justify-center gap-4">
          <div className="flex items-center gap-1.5 font-label-caps text-label-caps text-semantic-success">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-semantic-success animate-pulse" />
            RBI / AA Protocol Enclave
          </div>
          <span className="text-outline-variant font-body-sm text-body-sm">·</span>
          <span className="font-label-caps text-label-caps text-outline">Tier-1 Encryption Active</span>
        </div>
      </div>
    </div>
  )
}
