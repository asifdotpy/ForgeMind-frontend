export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <img src="/logo.png" alt="ForgeMind" className="h-9 w-9 rounded-md shrink-0" />
              <span className="font-bold text-2xl text-white">ForgeMind</span>
            </div>
            <p className="text-sm max-w-md text-slate-400 leading-relaxed">
              The coordination layer that makes the rest of engineering as fast as AI code generation.
              Open source, cloud-native, and built for engineering teams.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-3">Explore</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#problem" className="hover:text-white transition-colors">The Problem</a></li>
              <li><a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a></li>
              <li><a href="#architecture" className="hover:text-white transition-colors">Architecture</a></li>
              <li><a href="#principles" className="hover:text-white transition-colors">Principles</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-3">Project</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#roadmap" className="hover:text-white transition-colors">Roadmap</a></li>
              <li>
                <a href="https://github.com/asifdotpy/forge-mind" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  GitHub →
                </a>
              </li>
              <li>
                <a href="https://asifdotpy.notion.site/ForgeMind-Multi-Agent-DevOps-Copilot-3be6566cd850812b910cdeb6500bf6c1" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  Documentation →
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-10 pt-6 text-sm text-slate-500 flex flex-col md:flex-row justify-between items-center gap-2">
          <p>ForgeMind — Open Source. Built for engineering teams that ship.</p>
          <p className="text-slate-600">v3.0 · {new Date().getFullYear()}</p>
        </div>
      </div>
    </footer>
  );
}
