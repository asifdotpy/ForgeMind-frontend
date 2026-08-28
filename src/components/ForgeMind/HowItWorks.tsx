export function HowItWorks() {
  const steps = [
    {
      phase: "OBSERVE",
      desc: "Monitor PRs, builds, deployments, incidents, and commits across all sources.",
      color: "bg-sky-500",
    },
    {
      phase: "UNDERSTAND",
      desc: "Analyze changes, build failures, and anomalies with context-aware agents.",
      color: "bg-indigo-500",
    },
    {
      phase: "CORRELATE",
      desc: "Connect related events across the engineering lifecycle into coherent stories.",
      color: "bg-violet-500",
    },
    {
      phase: "DECIDE",
      desc: "Evaluate impact, risk, and priority using structured reasoning.",
      color: "bg-purple-500",
    },
    {
      phase: "ACT / ESCALATE",
      desc: "Execute low-risk actions autonomously; route high-impact decisions for approval.",
      color: "bg-fuchsia-500",
    },
    {
      phase: "LEARN",
      desc: "Capture outcomes, refine models, and improve future decisions.",
      color: "bg-pink-500",
    },
  ];

  return (
    <section id="how-it-works" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            Continuous Intelligence Loop
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            ForgeMind creates a closed feedback loop that gets smarter with every
            software change.
          </p>
        </div>

        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-sky-200 via-indigo-200 to-pink-200 -translate-y-1/2" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((step, i) => (
              <div key={i} className="relative">
                <div className="card-hover p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <div className={`w-12 h-12 rounded-xl ${step.color} flex items-center justify-center text-white font-bold text-sm mb-4`}>
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{step.phase}</h3>
                  <p className="text-slate-600">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <div>The engineering domain becomes the first implementation of a reusable agent control architecture.</div>
          <div className="text-slate-400 mt-2">// Hierarchy</div>
          <div>Supervisor → Managers → Workers → Validator → Reducer</div>
        </div>
      </div>
    </section>
  );
}