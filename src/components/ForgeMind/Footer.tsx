export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="shrink-0">
                <rect width="32" height="32" rx="8" fill="url(#logo-grad-footer)" />
                <path d="M8 12h4v8H8zM12 8h4v16h-4zM20 16h4v4h-4z" fill="white" />
                <defs>
                  <linearGradient id="logo-grad-footer" x1="0" y1="0" x2="32" y2="32">
                    <stop stopColor="#0ea5e9" />
                    <stop offset="1" stopColor="#6366f1" />
                  </linearGradient>
                </defs>
              </svg>
              <span className="font-bold text-xl text-white">ForgeMind</span>
            </div>
            <p className="text-sm max-w-md">
              An autonomous multi-agent engineering control plane that understands,
              monitors, and coordinates the entire software delivery lifecycle.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-3">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#problem" className="hover:text-white transition-colors">Problem</a></li>
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
                <a
                  href="https://github.com/asifdotpy/ForgeMind"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://asifdotpy.notion.site/ForgeMind-Multi-Agent-DevOps-Copilot-3be6566cd850812b910cdeb6500bf6c1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Documentation
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 text-sm text-center">
          <p> ForgeMind. Built for The Fortified Enterprise Fleet Hackathon.</p>
        </div>
      </div>
    </footer>
  );
}