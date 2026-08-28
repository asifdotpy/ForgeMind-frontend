export function Principles() {
  const principles = [
    {
      num: "01",
      title: "Solve a specific problem",
      desc: "Every agent must solve a specific problem. If removing it leaves no meaningful capability gap, it should not exist.",
    },
    {
      num: "02",
      title: "Exchange findings, not conversations",
      desc: "Structured data is more reliable than long agent-to-agent prose. Design for machine-readable outputs.",
    },
    {
      num: "03",
      title: "Autonomy proportional to risk",
      desc: "Low-risk actions can be autonomous. High-impact actions require approval. Safety is not optional.",
    },
    {
      num: "04",
      title: "Uncertainty is a valid result",
      desc: "A good agent knows when to escalate. Silence is worse than a confident wrong answer.",
    },
    {
      num: "05",
      title: "Understand relationships",
      desc: "A PR, build failure, deployment, and incident may all be part of one engineering story.",
    },
    {
      num: "06",
      title: "Polished workflows > unfinished agents",
      desc: "A single end-to-end workflow that works beats ten half-built agents.",
    },
  ];

  return (
    <section id="principles" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            Core Design Principles
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Six principles that govern every decision in ForgeMind&apos;s architecture.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {principles.map((p, i) => (
            <div
              key={i}
              className="card-hover p-8 rounded-2xl bg-white border border-slate-200"
            >
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