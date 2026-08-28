export function CTA() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
          Ready to Forge the Future?
        </h2>
        <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
          ForgeMind is open source and built for the community. Star the repo,
          read the docs, or contribute to the project.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="https://github.com/asifdotpy/ForgeMind"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-xl gradient-bg text-white font-semibold text-lg hover:opacity-90 transition-opacity shadow-lg shadow-sky-500/25"
          >
            ⭐ Star on GitHub
          </a>
          <a
            href="https://asifdotpy.notion.site/ForgeMind-Multi-Agent-DevOps-Copilot-3be6566cd850812b910cdeb6500bf6c1"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-xl border-2 border-slate-200 text-slate-700 font-semibold text-lg hover:border-slate-300 hover:bg-slate-50 transition-all"
          >
            📖 Read Documentation
          </a>
        </div>
      </div>
    </section>
  );
}