import Link from 'next/link'
import { signup } from '@/app/auth-actions'

export default async function SignupPage({ searchParams }: { searchParams: Promise<{ message?: string }> }) {
  const params = await searchParams;

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4 relative overflow-hidden">
      {/* Ambient glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-10 w-80 h-80 bg-primary/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="w-full flex flex-col gap-8" style={{ maxWidth: '30vw' }}>
        {/* Logo / Brand */}
        <div className="flex flex-col items-center gap-3 text-center">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-secondary-container/40 via-surface-container-high to-surface-container flex items-center justify-center shadow-md">
            <span className="material-symbols-outlined text-[28px] text-secondary">corporate_fare</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="font-headline-lg text-headline-lg text-on-surface font-semibold tracking-tight">RiskLens</span>
            <span className="font-label-caps text-label-caps text-secondary uppercase tracking-wider">MRIP Engine · Institutional Access</span>
          </div>
        </div>

        {/* Card */}
        <div className="rounded-2xl bg-surface-container-low/80 backdrop-blur-xl border border-border-glass shadow-[0_8px_32px_-4px_rgba(0,0,0,0.45)] p-8 flex flex-col gap-6">
          <div className="flex flex-col gap-1">
            <h1 className="font-headline-md text-headline-md text-on-surface font-semibold">Create your account</h1>
            <p className="font-body-sm text-body-sm text-outline">Get started with the MRIP intelligence platform</p>
          </div>

          {/* Trust signals — matching overview page badge style */}
          <div className="flex flex-wrap gap-2">
            <span className="px-2 py-0.5 rounded-full bg-semantic-success/15 text-semantic-success font-label-caps text-label-caps flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-semantic-success" />
              RBI Compliant
            </span>
            <span className="px-2 py-0.5 rounded-full bg-tertiary-container/20 text-tertiary font-label-caps text-label-caps flex items-center gap-1">
              <span className="material-symbols-outlined text-[12px]">verified</span>
              ISO 27001
            </span>
            <span className="px-2 py-0.5 rounded-full bg-surface-container-high text-outline font-label-caps text-label-caps">
              SOC 2 Type II
            </span>
          </div>

          <form className="flex flex-col gap-5" action={signup}>
            <div className="flex flex-col gap-2">
              <label className="font-label-caps text-label-caps text-outline uppercase tracking-wider" htmlFor="email">
                Work Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@institution.com"
                required
                suppressHydrationWarning
                className="w-full px-4 py-3 rounded-xl bg-surface-container border border-border-glass text-on-surface font-body-md text-body-md placeholder-outline focus:outline-none focus:border-secondary/50 focus:ring-2 focus:ring-secondary/15 transition-all"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-label-caps text-label-caps text-outline uppercase tracking-wider" htmlFor="password">
                Create Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                placeholder="Min. 8 characters"
                required
                suppressHydrationWarning
                className="w-full px-4 py-3 rounded-xl bg-surface-container border border-border-glass text-on-surface font-body-md text-body-md placeholder-outline focus:outline-none focus:border-secondary/50 focus:ring-2 focus:ring-secondary/15 transition-all"
              />
              <p className="font-body-sm text-body-sm text-outline-variant">Must be at least 8 characters</p>
            </div>

            {params?.message && (
              <div className="p-3 rounded-xl bg-semantic-critical/10 text-semantic-critical border border-semantic-critical/20 font-body-sm text-body-sm text-center">
                {params.message}
              </div>
            )}

            <div className="flex items-start gap-2.5">
              <input
                type="checkbox"
                id="terms"
                required
                suppressHydrationWarning
                className="mt-0.5 w-4 h-4 rounded border-border-glass bg-surface-container accent-primary"
              />
              <label htmlFor="terms" className="font-body-sm text-body-sm text-outline leading-relaxed">
                I agree to the{' '}
                <span className="text-tertiary cursor-pointer hover:text-on-surface transition-colors">Terms of Service</span>
                {' '}and{' '}
                <span className="text-tertiary cursor-pointer hover:text-on-surface transition-colors">Privacy Policy</span>.
                Data is handled per RBI guidelines.
              </label>
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-gradient-to-r from-secondary-container to-primary-container text-on-surface font-body-md text-body-md font-semibold shadow-md hover:brightness-110 transition-all mt-1 flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined text-[18px]">person_add</span>
              Create MRIP Account
            </button>
          </form>

          <div className="flex items-center gap-3">
            <div className="flex-1 h-px bg-border-glass" />
            <span className="font-label-caps text-label-caps text-outline">or</span>
            <div className="flex-1 h-px bg-border-glass" />
          </div>

          <p className="text-center font-body-sm text-body-sm text-outline">
            Already have an account?{' '}
            <Link href="/login" className="text-tertiary hover:text-on-surface font-medium transition-colors">
              Sign In
            </Link>
          </p>
        </div>

        {/* Security badge */}
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
