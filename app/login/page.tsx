import Link from 'next/link'
import { login } from '@/app/auth-actions'
import { Button } from '@/components/ui/button'

export default async function LoginPage({ searchParams }: { searchParams: Promise<{ message?: string }> }) {
  const params = await searchParams;
  return (
    <div className="flex-1 flex flex-col w-full px-8 sm:max-w-md justify-center gap-2 mx-auto min-h-screen">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-geist font-semibold text-white tracking-tight">RiskLens MRIP</h1>
        <p className="text-on-surface-variant font-sans mt-2">Sign in to your account</p>
      </div>

      <form className="animate-in flex-1 flex flex-col w-full justify-center gap-4 text-on-surface" action={login}>
        <label className="text-sm font-medium font-sans" htmlFor="email">
          Email
        </label>
        <input
          className="rounded-md px-4 py-2 bg-surface-overlay border border-white/10 text-white font-sans focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
          name="email"
          placeholder="you@example.com"
          required
        />
        <label className="text-sm font-medium font-sans mt-2" htmlFor="password">
          Password
        </label>
        <input
          className="rounded-md px-4 py-2 bg-surface-overlay border border-white/10 text-white font-sans focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
          type="password"
          name="password"
          placeholder="••••••••"
          required
        />
        <Button className="mt-4" type="submit">
          Sign In
        </Button>
        {params?.message && (
          <p className="mt-4 p-4 bg-rose-500/10 text-rose-500 border border-rose-500/20 text-center rounded-md text-sm">
            {params.message}
          </p>
        )}
        <div className="text-center text-sm text-on-surface-variant mt-4">
          Don&apos;t have an account?{' '}
          <Link href="/signup" className="text-primary hover:underline">
            Sign Up
          </Link>
        </div>
      </form>
    </div>
  )
}
