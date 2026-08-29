export function Principles() {
  const principles = [
    {
      num: "01",
      title: "Solve a specific problem",
      desc: "Every agent earns its keep. If removing it leaves no meaningful capability gap, it shouldn't exist.",
    },
    {
      num: "02",
      title: "Exchange findings, not conversations",
      desc: "Structured data beats unstructured prose. Machine-readable outputs mean reliable automation, not chat logs.",
    },
    {
      num: "03",
      title: "Autonomy proportional to risk",
      desc: "Low risk? Act fast. High risk? Ask a human. The system knows the difference and escalates appropriately.",
    },
    {
      num: "04",
      title: "Uncertainty is a valid result",
      desc: "A good system knows when it doesn't know. Silence is worse than a confident wrong answer — escalation is a feature.",
    },
    {
      num: "05",
      title: "Understand relationships",
      desc: "A PR, a failed build, a deployment, and an incident are often one story. ForgeMind connects them.",
    },
    {
      num: "06",
      title: "Polished workflows > unfinished agents",
      desc: "One end-to-end workflow that works beats ten half-built agents. Ship the loop first.",
    },
  ];

  return (
    <section id="principles" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            How We Build It
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Six principles that keep ForgeMind focused, trustworthy, and shippable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {principles.map((p, i) => (
            <div key={i} className="card-hover p-8 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="text-5xl font-bold gradient-text mb-4">{p.num}</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{p.title}</h3>
              <p className="text-slate-600 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}