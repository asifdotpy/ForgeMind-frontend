export function DataModel() {
  const entities = [
    { name: "Event", desc: "A change in the engineering system — a PR, a build, an alert, a commit." },
    { name: "Finding", desc: "An insight derived from events — risk patterns, correlations, drift signals." },
    { name: "Decision", desc: "A choice made by an agent or a human — merge, ship, escalate, or hold." },
    { name: "Entity", desc: "A first-class object: a repo, a service, a team, a deployment." },
    { name: "Relationship", desc: "How entities connect and influence each other across the lifecycle." },
    { name: "Agent", desc: "A specialized worker with one job, one input, one output." },
    { name: "Action", desc: "An executable step taken by an agent — analyze, flag, route, comment." },
    { name: "Escalation", desc: "A clear handoff to a human reviewer with full context attached." },
  ];

  return (
    <section id="data-model" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            The Building Blocks
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Eight core entities that power ForgeMind's understanding of your engineering lifecycle.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {entities.map((entity, i) => (
            <div key={i} className="card-hover p-5 rounded-xl border border-slate-200 bg-white">
              <h3 className="text-base font-bold text-slate-900 mb-1">{entity.name}</h3>
              <p className="text-sm text-slate-600">{entity.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
