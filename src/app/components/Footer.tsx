export const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-700 py-8 mt-12">
      <div className="max-w-6xl mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
          
          {/* Project Info */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-white mb-3">
              🐻 Zustand Controller
            </h3>
            <p className="text-gray-400 text-sm mb-3">
              Bear necessities for workflow management. 
              Simplifying state management with the power of Zustand.
            </p>
            <a 
              href="https://github.com/astrarudra/zustand-controller" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              <span>View Repository</span>
            </a>
          </div>

          {/* Team */}
          <div className="text-center">
          </div>

          {/* Connect */}
          <div className="text-center md:text-right">
            <h3 className="text-lg font-semibold text-white mb-3">Connect</h3>
            <div className="space-y-2">
              <div>
                <a 
                  href="https://github.com/astrarudra" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
                >
                  <span>⚡ GitHub @astrarudra</span>
                </a>
              </div>
              <div className="text-gray-500 text-sm">
                Have an idea, issue, or feedback? 
              </div>
              <div className="text-gray-500 text-sm">
                Drop it in the github issues.
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            
            {/* Left side - Brand */}
            <div className="flex items-center space-x-2">
              <span className="text-white font-bold">AstraRudra</span>
              <span className="text-gray-400">•</span>
              <span className="text-gray-400 text-sm">Focusing on Innovation & Creative Solutions</span>
            </div>

            {/* Right side - Copyright */}
            <div className="flex items-center space-x-4 text-gray-400 text-sm">
              <span>Made with ❤️ by AstraRudra</span>
              <span>•</span>
              <span>© 2025</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;