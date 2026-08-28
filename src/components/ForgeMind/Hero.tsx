export function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-sky-50 via-white to-indigo-50" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-r from-sky-200/40 to-indigo-200/40 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-100 text-sky-800 text-sm font-medium mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
          </span>
          🟢 SPEC-001 Complete — Version 3.0
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 mb-6">
          ForgeMind
          <br />
          <span className="gradient-text">Multi-Agent DevOps Copilot</span>
        </h1>

        <p className="text-xl sm:text-2xl text-slate-600 max-w-3xl mx-auto mb-10 leading-relaxed">
          A five-tier hierarchical engineering control plane built on Google Cloud that follows software changes from pull request to production with deterministic safety and human escalation.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#how-it-works"
            className="px-8 py-4 rounded-xl gradient-bg text-white font-semibold text-lg hover:opacity-90 transition-opacity shadow-lg shadow-sky-500/25"
          >
            Explore How It Works
          </a>
          <a
            href="https://github.com/asifdotpy/ForgeMind"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-xl border-2 border-slate-200 text-slate-700 font-semibold text-lg hover:border-slate-300 hover:bg-slate-50 transition-all"
          >
            View on GitHub →
          </a>
        </div>

        <div className="mt-16 flex flex-wrap justify-center gap-8 text-sm text-slate-500">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🧠</span>
            <span>Multi-Agent</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-2xl">🔄</span>
            <span>Continuous Intelligence</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-2xl">☁️</span>
            <span>Cloud-Native</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-2xl">🔒</span>
            <span>Enterprise-Grade</span>
          </div>
        </div>
      </div>
    </section>
  );
}