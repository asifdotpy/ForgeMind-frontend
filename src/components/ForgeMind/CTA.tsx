export function CTA() {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-indigo-950 to-sky-950 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 tracking-tight">
          Stop letting review queues eat your AI gains.
        </h2>
        <p className="text-xl text-indigo-200 mb-10 max-w-2xl mx-auto leading-relaxed">
          Code generation is solved. The rest of engineering isn't.<br />
          ForgeMind turns faster coding into faster review — deterministically.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="#problem" className="px-8 py-4 rounded-xl bg-white text-indigo-900 font-bold text-lg hover:bg-indigo-50 transition-colors shadow-2xl">
            Understand the problem →
          </a>
          <a href="https://github.com/asifdotpy/ForgeMind" target="_blank" rel="noopener noreferrer" className="px-8 py-4 rounded-xl border-2 border-indigo-400/40 text-white font-semibold text-lg hover:bg-indigo-900/40 transition-all">
            Star on GitHub →
          </a>
        </div>
        <div className="mt-12 text-sm text-indigo-300/70">
          Open source · Built for engineering teams · Version 3.0
        </div>
      </div>
    </section>
  );
}
