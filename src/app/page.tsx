import Link from "next/link";

export default function HomePage() {
  return (
    <main className="container-app flex min-h-screen items-center py-16">
      <div className="grid w-full gap-10 md:grid-cols-[1.2fr_0.8fr] md:items-center">
        <section>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-violet-300">
            MirrorMe
          </p>

          <h1 className="max-w-3xl text-5xl font-black leading-[1.05] md:text-7xl">
            Meet the AI version of you.
          </h1>

          <p className="muted mt-6 max-w-2xl text-lg leading-8">
            MirrorMe builds a psychological profile from your answers and turns
            it into an AI mirror you can interact with. Start with a short
            onboarding and generate your first profile.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/onboarding" className="primary-button">
              Start onboarding
            </Link>

            <a href="#how-it-works" className="secondary-button">
              See how it works
            </a>
          </div>
        </section>

        <aside className="card p-6 md:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-300">
            First version
          </p>

          <div className="mt-5 space-y-4">
            <div className="rounded-2xl border border-white/10 bg-white/3 p-4">
              <p className="font-semibold">1. Answer guided questions</p>
              <p className="muted mt-1 text-sm">
                A short psychological intake to understand your patterns.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/3 p-4">
              <p className="font-semibold">2. Generate your profile</p>
              <p className="muted mt-1 text-sm">
                MirrorMe turns your answers into a structured profile.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/3 p-4">
              <p className="font-semibold">3. Prepare for mirror chat</p>
              <p className="muted mt-1 text-sm">
                Next we will use this profile to power your AI twin.
              </p>
            </div>
          </div>
        </aside>
      </div>

      <section
        id="how-it-works"
        className="container-app absolute bottom-10 left-1/2 hidden -translate-x-1/2 lg:block"
      >
        <p className="muted text-sm">
          Start simple: questions → profile → mirror agent.
        </p>
      </section>
    </main>
  );
}
