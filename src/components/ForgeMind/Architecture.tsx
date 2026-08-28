export function Architecture() {
  const tiers = [
    {
      tier: "Tier 1",
      title: "Engineering Supervisor",
      role: "Global lifecycle coordination",
      items: ["Coverage plan generation", "Domain partitioning", "Global constraint enforcement"],
      icon: "👁️",
      color: "bg-amber-50 border-amber-200 text-amber-900",
    },
    {
      tier: "Tier 2",
      title: "Domain Managers ×3",
      role: "Bounded domain coordination",
      items: ["Code Intelligence Manager", "Delivery Health Manager", "Production Health Manager"],
      icon: "🧭",
      color: "bg-sky-50 border-sky-200 text-sky-900",
    },
    {
      tier: "Tier 3",
      title: "Specialist Workers ×6",
      role: "Deep evidence extraction",
      items: ["PR Pre-Flight AST", "Docs Drift & Spec", "Build Log & Flakiness", "Alert Storm Clustering", "Telemetry Correlation", "Security & Dependency"],
      icon: "⚙️",
      color: "bg-emerald-50 border-emerald-200 text-emerald-900",
    },
    {
      tier: "Tier 4",
      title: "Cross-Lifecycle Validator",
      role: "Multi-domain reconciliation",
      items: ["Cross-domain correlation", "Duplicate detection", "Coverage verification", "Conservative causality"],
      icon: "🔍",
      color: "bg-violet-50 border-violet-200 text-violet-900",
    },
    {
      tier: "Tier 5",
      title: "Decision Reducer & Publisher",
      role: "Risk policy and safe action",
      items: ["Evaluates ValidatedSituation", "Emits DecisionRecord", "Proposes Action or Escalation", "Human approval gate"],
      icon: "🎮",
      color: "bg-pink-50 border-pink-200 text-pink-900",
    },
  ];

  return (
    <section id="architecture" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            Five-Tier Hierarchical Architecture
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            A strict five-tier DAG with supervisor, domain managers, specialist workers, validator, and decision reducer — orchestrated by Google ADK 2 on Cloud Run.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {tiers.map((tier, i) => (
            <div
              key={i}
              className={`p-6 rounded-2xl border ${tier.color}`}
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="text-3xl">{tier.icon}</span>
                <div>
                  <div className="text-xs font-bold opacity-70">{tier.tier}</div>
                  <h3 className="text-lg font-bold">{tier.title}</h3>
                </div>
              </div>
              <p className="text-sm opacity-80 mb-3">{tier.role}</p>
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
          <div className="text-slate-400 mb-2">// Runtime chain</div>
          <div>Acquire → Analyze → Reconcile → Produce → Validate</div>
          <div className="text-slate-400 mt-2">// Canonical artifact lineage</div>
          <div>Event → CoveragePlan → EvidenceShard → DomainFinding → ValidatedSituation → DecisionRecord → ProposedAction → ActionValidation → Action | Escalation</div>
          <div className="text-slate-400 mt-2">// Infrastructure</div>
          <div>Google ADK 2 · Vertex AI Gemini 3.5 · Cloud Run · Artifact Registry</div>
        </div>
      </div>
    </section>
  );
}