import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-zinc-800/60 bg-zinc-950/80 backdrop-blur-xl">
      <div className="mx-auto flex h-14 sm:h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="group flex items-center gap-1.5 sm:gap-2.5 flex-shrink-0">
          <span className="flex h-7 sm:h-8 w-7 sm:w-8 items-center justify-center rounded-lg bg-gradient-to-br from-violet-500 to-indigo-600 text-xs sm:text-sm font-bold text-white shadow-lg shadow-violet-500/25 transition group-hover:shadow-violet-500/40">
            R
          </span>
          <span className="hidden sm:block text-base sm:text-lg font-semibold tracking-tight text-zinc-100">
            Resu<span className="text-violet-400">nora</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-6 sm:gap-8 text-xs sm:text-sm text-zinc-400 md:flex">
          <a href="#features" className="transition hover:text-zinc-100">
            Features
          </a>
          <a href="#how-it-works" className="transition hover:text-zinc-100">
            How it works
          </a>
        </nav>
        <div className="flex items-center gap-2 sm:gap-3">
          <Link
            href="/login"
            className="hidden sm:inline-block rounded-lg px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium text-zinc-300 transition hover:text-white"
          >
            Log in
          </Link>
          <Link
            href="/login"
            className="rounded-lg bg-gradient-to-r from-violet-600 to-indigo-600 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium text-white shadow-lg shadow-violet-500/20 transition hover:from-violet-500 hover:to-indigo-500"
          >
            Get started
          </Link>
        </div>
      </div>
    </header>
  );
}
