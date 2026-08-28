export function Problem() {
  const problems = [
    { icon: "🔍", title: "Review changes faster", desc: "Accelerate code review with AI-powered analysis" },
    { icon: "🧩", title: "Understand complexity", desc: "Map relationships across large codebases" },
    { icon: "🔧", title: "Investigate CI/CD failures", desc: "Automated root cause analysis for builds" },
    { icon: "📄", title: "Sync documentation", desc: "Keep docs aligned with code changes" },
    { icon: "🔔", title: "Reduce notification overload", desc: "Intelligent alert correlation and routing" },
    { icon: "⚠️", title: "Detect risky changes", desc: "Proactive risk assessment before merge" },
    { icon: "🔗", title: "Correlate incidents", desc: "Connect production incidents with recent changes" },
    { icon: "🤝", title: "Shared engineering state", desc: "Maintain context across the team" },
  ];

  return (
    <section id="problem" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            The Core Problem
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            AI is accelerating software creation, but creating more code doesn&apos;t automatically
            mean engineering teams can ship with confidence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((item, i) => (
            <div
              key={i}
              className="card-hover p-6 rounded-2xl border border-slate-200 bg-slate-50/50"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">{item.title}</h3>
              <p className="text-sm text-slate-600">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 rounded-2xl gradient-bg text-white text-center">
          <p className="text-lg font-medium mb-2">Our Core Hypothesis</p>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            As software development accelerates, the bottleneck shifts from code creation
            to engineering coordination, verification, and trust. ForgeMind acts as the
            intelligence and coordination layer across this lifecycle.
          </p>
        </div>
      </div>
    </section>
  );
}