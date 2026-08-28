export function DataModel() {
  const entities = [
    { name: "Event", desc: "A change or occurrence in the engineering system" },
    { name: "Finding", desc: "An insight derived from analysis of events" },
    { name: "Decision", desc: "A choice made by an agent or human" },
    { name: "Entity", desc: "A first-class object: repo, service, team, deployment" },
    { name: "Relationship", desc: "How entities connect and influence each other" },
    { name: "Agent", desc: "A specialized autonomous worker with a specific role" },
    { name: "Action", desc: "An executable step taken by an agent" },
    { name: "Escalation", desc: "A human-review boundary for high-impact decisions" },
  ];

  return (
    <section id="data-model" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            Data Model
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Eight core entities that power ForgeMind&apos;s understanding of your engineering lifecycle.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {entities.map((entity, i) => (
            <div
              key={i}
              className="card-hover p-5 rounded-xl border border-slate-200 bg-slate-50/50"
            >
              <h3 className="text-base font-bold text-slate-900 mb-1">{entity.name}</h3>
              <p className="text-sm text-slate-600">{entity.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}