export function Problem() {
  return (
    <section id="problem" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            The Real Bottleneck Isn't Code Generation
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            AI writes code fast — but review, validation, and coordination still take days.<br />
            The bottleneck has shifted: your engineering throughput is limited by process, not typing speed.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {/* Pain Point 1: Review Latency */}
          <div className="card-hover p-6 rounded-2xl border border-slate-200 bg-slate-50">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 flex items-center justify-center bg-red-50 text-red-600 rounded-full">
                <span className="text-2xl">⏳</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Code review is the new bottleneck</h3>
                <p className="text-slate-600">
                  The median engineer spends ~13 hours waiting for a pull request to merge — most of that time is pure queue delay waiting for human review.
                </p>
              </div>
            </div>
          </div>

          {/* Pain Point 2: AI-Generated Code Increases Review Load */}
          <div className="card-hover p-6 rounded-2xl border border-slate-200 bg-slate-50">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 flex items-center justify-center bg-red-50 text-red-600 rounded-full">
                <span className="text-2xl">🤖→👀</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">AI code creates more review work</h3>
                <p className="text-slate-600">
                  46% of an active AI user's code comes from assistants — but that code still needs human review, triage, and often rework because it's "almost right."
                </p>
              </div>
            </div>
          </div>

          {/* Pain Point 3: Coordination Overhead */}
          <div className="card-hover p-6 rounded-2xl border border-slate-200 bg-slate-50">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 flex items-center justify-center bg-red-50 text-red-600 rounded-full">
                <span className="text-2xl">🔗</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Engineering is a coordination problem</h3>
                <p className="text-slate-600">
                  Developers spend only ~20% of their time writing code. The rest is spent on meetings, context-switching, waiting for builds, and incident response.
                </p>
              </div>
            </div>
          </div>

          {/* Pain Point 4: CI/CD Noise from "Almost Right" Code */}
          <div className="card-hover p-6 rounded-2xl border border-slate-200 bg-slate-50">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 flex items-center justify-center bg-red-50 text-red-600 rounded-full">
                <span className="text-2xl">🔧</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">AI code increases CI noise and failures</h3>
                <p className="text-slate-600">
                  Code that compiles but fails logic or integration tests creates noisy CI pipelines, wasting minutes and delaying feedback.
                </p>
              </div>
            </div>
          </div>

          {/* Pain Point 5: Documentation Drift */}
          <div className="card-hover p-6 rounded-2xl border border-slate-200 bg-slate-50">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 flex items-center justify-center bg-red-50 text-red-600 rounded-full">
                <span className="text-2xl">📄</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Documentation falls behind AI-generated changes</h3>
                <p className="text-slate-600">
                  When AI writes code faster than humans can update docs, the system becomes harder to maintain, audit, and onboard new team members.
                </p>
              </div>
            </div>
          </div>

          {/* Pain Point 6: Alert Fatigue and Incident Correlation */}
          <div className="card-hover p-6 rounded-2xl border border-slate-200 bg-slate-50">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 flex items-center justify-center bg-red-50 text-red-600 rounded-full">
                <span className="text-2xl">🚨</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Incidents aren't correlated with recent changes</h3>
                <p className="text-slate-600">
                  Without intelligent correlation, teams waste hours tracing whether an outage was caused by a recent deploy, a config drift, or an external dependency.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 p-8 rounded-2xl gradient-bg text-white text-center">
          <p className="text-lg font-medium mb-2">Our Core Hypothesis</p>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            As software development accelerates, the bottleneck shifts from code creation to engineering coordination, verification, and trust.<br />
            ForgeMind acts as the intelligence and coordination layer across this lifecycle — making the rest of the process as fast as code generation.
          </p>
        </div>
      </div>
    </section>
  );
}