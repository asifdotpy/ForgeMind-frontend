export function FlowChart() {
  return (
    <section id="flow-chart" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            Five-Tier Runtime Flow
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Every engineering event travels through a strict five-tier DAG before any action is taken.
          </p>
        </div>

        <div className="overflow-x-auto">
          <svg viewBox="0 0 1100 520" className="w-full max-w-5xl mx-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <marker id="arrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
                <path d="M0,0 L0,6 L9,3 z" fill="#94a3b8" />
              </marker>
              <linearGradient id="tier1" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#f59e0b" />
                <stop offset="100%" stopColor="#d97706" />
              </linearGradient>
              <linearGradient id="tier2" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#0ea5e9" />
                <stop offset="100%" stopColor="#0284c7" />
              </linearGradient>
              <linearGradient id="tier3" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#10b981" />
                <stop offset="100%" stopColor="#059669" />
              </linearGradient>
              <linearGradient id="tier4" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#6366f1" />
                <stop offset="100%" stopColor="#4f46e5" />
              </linearGradient>
              <linearGradient id="tier5" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#ec4899" />
                <stop offset="100%" stopColor="#db2777" />
              </linearGradient>
            </defs>

            {/* Tier 1 - Supervisor */}
<rect x="450" y="10" width="200" height="64" rx="12" fill="url(#tier1)" />
            <text x="550" y="44" textAnchor="middle" fill="white" fontWeight="bold" fontSize="12">Tier 1: Engineering</text>
            <text x="550" y="58" textAnchor="middle" fill="white" fontSize="11">Supervisor</text>

            {/* Tier 2 - 3 Managers */}
            <rect x="40" y="130" width="180" height="64" rx="12" fill="url(#tier2)" />
            <text x="130" y="155" textAnchor="middle" fill="white" fontWeight="bold" fontSize="14">Code Intelligence</text>
            <text x="130" y="175" textAnchor="middle" fill="white" fontSize="12">Manager</text>

            <rect x="290" y="130" width="180" height="64" rx="12" fill="url(#tier2)" />
            <text x="380" y="155" textAnchor="middle" fill="white" fontWeight="bold" fontSize="14">Delivery Health</text>
            <text x="380" y="175" textAnchor="middle" fill="white" fontSize="12">Manager</text>

            <rect x="540" y="130" width="180" height="64" rx="12" fill="url(#tier2)" />
            <text x="630" y="155" textAnchor="middle" fill="white" fontWeight="bold" fontSize="14">Production Health</text>
            <text x="630" y="175" textAnchor="middle" fill="white" fontSize="12">Manager</text>

            <rect x="790" y="130" width="180" height="64" rx="12" fill="url(#tier2)" />
            <text x="880" y="155" textAnchor="middle" fill="white" fontWeight="bold" fontSize="14">Coverage Plan</text>
            <text x="880" y="175" textAnchor="middle" fill="white" fontSize="12">Output</text>

            {/* Tier 3 - 6 Workers */}
            <rect x="20" y="260" width="160" height="56" rx="10" fill="url(#tier3)" />
            <text x="100" y="283" textAnchor="middle" fill="white" fontWeight="bold" fontSize="13">PR Pre-Flight AST</text>
            <text x="100" y="301" textAnchor="middle" fill="white" fontSize="11">Worker</text>

            <rect x="200" y="260" width="160" height="56" rx="10" fill="url(#tier3)" />
            <text x="280" y="283" textAnchor="middle" fill="white" fontWeight="bold" fontSize="13">Docs Drift & Spec</text>
            <text x="280" y="301" textAnchor="middle" fill="white" fontSize="11">Worker</text>

            <rect x="380" y="260" width="160" height="56" rx="10" fill="url(#tier3)" />
            <text x="460" y="283" textAnchor="middle" fill="white" fontWeight="bold" fontSize="13">Build Log & Flakiness</text>
            <text x="460" y="301" textAnchor="middle" fill="white" fontSize="11">Worker</text>

            <rect x="560" y="260" width="160" height="56" rx="10" fill="url(#tier3)" />
            <text x="640" y="283" textAnchor="middle" fill="white" fontWeight="bold" fontSize="13">Alert Storm</text>
            <text x="640" y="301" textAnchor="middle" fill="white" fontSize="11">Clustering Worker</text>

            <rect x="740" y="260" width="160" height="56" rx="10" fill="url(#tier3)" />
            <text x="820" y="283" textAnchor="middle" fill="white" fontWeight="bold" fontSize="13">Telemetry</text>
            <text x="820" y="301" textAnchor="middle" fill="white" fontSize="11">Correlation Worker</text>

            <rect x="920" y="260" width="160" height="56" rx="10" fill="url(#tier3)" />
            <text x="1000" y="283" textAnchor="middle" fill="white" fontWeight="bold" fontSize="13">Security & Dependency</text>
            <text x="1000" y="301" textAnchor="middle" fill="white" fontSize="11">Worker</text>

            {/* Tier 4 - Validator */}
            <rect x="350" y="380" width="400" height="56" rx="12" fill="url(#tier4)" />
            <text x="550" y="403" textAnchor="middle" fill="white" fontWeight="bold" fontSize="16">Tier 4: Cross-Lifecycle Validator</text>
            <text x="550" y="421" textAnchor="middle" fill="white" fontSize="12">Reconcile · Deduplicate · Verify Coverage</text>

            {/* Tier 5 - Reducer */}
            <rect x="350" y="460" width="400" height="56" rx="12" fill="url(#tier5)" />
            <text x="550" y="483" textAnchor="middle" fill="white" fontWeight="bold" fontSize="16">Tier 5: Decision Reducer & Publisher</text>
            <text x="550" y="501" textAnchor="middle" fill="white" fontSize="12">Risk Policy · Safe Action · Human Escalation</text>

            {/* Arrows */}
            <line x1="550" y1="74" x2="550" y2="110" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrow)" />
            <line x1="550" y1="110" x2="130" y2="130" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrow)" />
            <line x1="550" y1="110" x2="380" y2="130" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrow)" />
            <line x1="550" y1="110" x2="630" y2="130" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrow)" />
            <line x1="550" y1="110" x2="880" y2="130" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrow)" />

            <line x1="130" y1="194" x2="100" y2="260" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrow)" />
            <line x1="130" y1="194" x2="280" y2="260" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrow)" />
            <line x1="380" y1="194" x2="460" y2="260" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrow)" />
            <line x1="380" y1="194" x2="640" y2="260" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrow)" />
            <line x1="630" y1="194" x2="820" y2="260" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrow)" />
            <line x1="630" y1="194" x2="1000" y2="260" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrow)" />

            <line x1="100" y1="316" x2="550" y2="380" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrow)" />
            <line x1="280" y1="316" x2="550" y2="380" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrow)" />
            <line x1="460" y1="316" x2="550" y2="380" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrow)" />
            <line x1="640" y1="316" x2="550" y2="380" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrow)" />
            <line x1="820" y1="316" x2="550" y2="380" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrow)" />
            <line x1="1000" y1="316" x2="550" y2="380" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrow)" />

            <line x1="550" y1="436" x2="550" y2="460" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrow)" />
          </svg>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl bg-slate-900 text-slate-300 font-mono text-sm overflow-x-auto">
            <div className="text-slate-400 mb-2">// Canonical artifact lineage</div>
            <div>Event → CoveragePlan → EvidenceShard → DomainFinding → ValidatedSituation</div>
            <div className="text-slate-400 mt-2">// Decision pipeline</div>
            <div>DecisionRecord → ProposedAction → ActionValidation → Action | Escalation</div>
          </div>
          <div className="p-6 rounded-2xl bg-slate-900 text-slate-300 font-mono text-sm overflow-x-auto">
            <div className="text-slate-400 mb-2">// Runtime chain</div>
            <div>Acquire → Analyze → Reconcile → Produce → Validate</div>
            <div className="text-slate-400 mt-2">// Google Cloud runtime</div>
            <div>Google ADK 2 · Vertex AI Gemini 3.5 · Cloud Run · Artifact Registry</div>
          </div>
        </div>
      </div>
    </section>
  );
}