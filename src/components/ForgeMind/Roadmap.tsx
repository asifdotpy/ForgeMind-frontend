export function Roadmap() {
  const phases = [
    {
      phase: "Phase 1",
      title: "Validate the Problems",
      status: "current",
      items: [
        "Identify exact engineering pain for each agent",
        "Find evidence the problem is common",
        "Map existing solutions and gaps",
      ],
    },
    {
      phase: "Phase 2",
      title: "Challenge Every Agent",
      status: "upcoming",
      items: [
        "Ask: if this agent disappeared, what becomes unsolved?",
        "Eliminate agents without meaningful capability gaps",
        "Define success metrics per agent",
      ],
    },
    {
      phase: "Phase 3",
      title: "Define the MVP",
      status: "upcoming",
      items: [
        "Decide which workflows must work end-to-end",
        "Build the minimum viable agent fleet",
        "Validate with real engineering teams",
      ],
    },
    {
      phase: "Phase 4",
      title: "Ship & Learn",
      status: "upcoming",
      items: [
        "Deploy MVP to production",
        "Capture telemetry and outcomes",
        "Iterate based on real usage data",
      ],
    },
  ];

  return (
    <section id="roadmap" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            Roadmap
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            From problem validation to production — a clear path forward.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {phases.map((phase, i) => (
            <div
              key={i}
              className="card-hover p-6 rounded-2xl border border-slate-200 bg-white"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-sm font-bold text-slate-500">{phase.phase}</span>
                {phase.status === "current" && (
                  <span className="px-2 py-0.5 rounded-full bg-sky-100 text-sky-700 text-xs font-medium">
                    Current
                  </span>
                )}
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-4">{phase.title}</h3>
              <ul className="space-y-2">
                {phase.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm text-slate-600">
                    <span className="mt-1 w-1.5 h-1.5 rounded-full bg-sky-500 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}