export function Architecture() {
  const tiers = [
    {
      tier: "Tier 1",
      title: "Engineering Supervisor",
      role: "Decides what's in scope",
      items: ["What should we look at?", "Which domains are affected?", "What are the constraints?"],
      icon: "👁️",
      color: "bg-amber-50 border-amber-200 text-amber-900",
    },
    {
      tier: "Tier 2",
      title: "Domain Managers ×3",
      role: "Each owns one dimension",
      items: ["Code Intelligence Manager", "Delivery Health Manager", "Production Health Manager"],
      icon: "🧭",
      color: "bg-sky-50 border-sky-200 text-sky-900",
    },
    {
      tier: "Tier 3",
      title: "Specialist Workers ×6",
      role: "Deep-dive analysis on one signal",
      items: ["PR Pre-Flight AST", "Docs Drift & Spec", "Build Log & Flakiness", "Alert Storm Clustering", "Telemetry Correlation", "Security & Dependency"],
      icon: "⚙️",
      color: "bg-emerald-50 border-emerald-200 text-emerald-900",
    },
    {
      tier: "Tier 4",
      title: "Cross-Lifecycle Validator",
      role: "Removes noise, keeps signal",
      items: ["Correlate across domains", "Deduplicate findings", "Verify coverage is complete"],
      icon: "🔍",
      color: "bg-violet-50 border-violet-200 text-violet-900",
    },
    {
      tier: "Tier 5",
      title: "Decision Reducer & Publisher",
      role: "Decides what to do, routes safely",
      items: ["Evaluate risk", "Propose action or escalation", "Route to the right human with full context"],
      icon: "🎮",
      color: "bg-pink-50 border-pink-200 text-pink-900",
    },
  ];

  return (
    <section id="architecture" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            Five tiers. Every change, end to end.
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            From pull request to production — every engineering event passes through five structured tiers of analysis, correlation, and decision-making before any action is taken.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {tiers.map((tier, i) => (
            <div key={i} className={`p-6 rounded-2xl border ${tier.color}`}>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-3xl">{tier.icon}</span>
                <div>
                  <div className="text-xs font-bold opacity-70">{tier.tier}</div>
                  <h3 className="text-lg font-bold">{tier.title}</h3>
                </div>
              </div>
              <p className="text-sm opacity-80 mb-3 italic">{tier.role}</p>
              <ul className="space-y-1.5 text-sm">
                {tier.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-2">
                    <span className="mt-1 w-1.5 h-1.5 rounded-full bg-current opacity-70 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="p-6 rounded-2xl bg-slate-900 text-slate-300 font-mono text-sm overflow-x-auto">
          <div className="text-slate-400 mb-2">// How a change moves through the system</div>
          <div className="mb-3">Observe → Understand → Correlate → Decide → Act</div>
          <div className="text-slate-400 mb-2">// What gets produced at each tier</div>
          <div>Coverage Plan → Evidence Shards → Findings → Validated Situation → Decision Record</div>
          <div className="text-slate-400 mt-3 text-xs opacity-60">Built on Google Cloud · ADK 2 · Vertex AI Gemini · Cloud Run</div>
        </div>
      </div>
    </section>
  );
}