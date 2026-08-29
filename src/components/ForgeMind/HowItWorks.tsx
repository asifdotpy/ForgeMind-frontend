export function HowItWorks() {
  const steps = [
    {
      phase: "OBSERVE",
      tagline: "Watch every engineering signal",
      desc: "PRs, builds, deployments, incidents, docs, logs, metrics — all of it, everywhere at once.",
      icon: "👁️",
    },
    {
      phase: "UNDERSTAND",
      tagline: "Connect the dots",
      desc: "Find relationships no human could see — a flaky build, a risky PR, a drifting doc, a silent incident precursor.",
      icon: "🧠",
    },
    {
      phase: "CORRELATE",
      tagline: "Build coherent stories",
      desc: "One change. Six perspectives. One decision. ForgeMind merges signal into story so reviewers see the full picture.",
      icon: "🔗",
    },
    {
      phase: "DECIDE",
      tagline: "Evaluate before merge",
      desc: "Impact, risk, and urgency are weighed in a structured pass before any action is considered.",
      icon: "⚖️",
    },
    {
      phase: "ACT / ESCALATE",
      tagline: "Move fast, stay safe",
      desc: "Low-risk: merge the fix automatically. High-risk: route to the right human with full context.",
      icon: "🚀",
    },
    {
      phase: "LEARN",
      tagline: "Get smarter every cycle",
      desc: "Every decision, merge, and escalation becomes feedback for the next cycle.",
      icon: "📈",
    },
  ];

  return (
    <section id="how-it-works" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            The Continuous Intelligence Loop
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            ForgeMind closes the loop between AI-generated code and engineering outcomes. Every change is observed, analyzed, and decided — fast.
          </p>
        </div>

        <div className="space-y-8">
          {steps.map((step, i) => (
            <div key={i} className="group">
              <div className="card-hover p-8 rounded-2xl bg-white border border-slate-200 flex items-start gap-6">
                <div className="flex-shrink-0 w-14 h-14 rounded-xl gradient-bg flex items-center justify-center text-2xl text-white shadow-lg">
                  {step.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-bold text-sky-600 bg-sky-50 px-2 py-0.5 rounded uppercase tracking-wider">
                      Step {i + 1}
                    </span>
                    <h3 className="text-2xl font-bold text-slate-900 group-hover:text-sky-700 transition-colors">{step.phase}</h3>
                  </div>
                  <p className="text-slate-900 font-semibold text-lg mb-1">{step.tagline}</p>
                  <p className="text-slate-600">{step.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
