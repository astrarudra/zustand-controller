import { useState } from "react";
import { Card, Title, ImgLazy } from "./UIElements";

const CopyablePromptCard = ({ title, prompt, icon, description }: any) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(prompt);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <Card>
      <div className="h-full flex flex-col">
        <div className="flex items-center mb-4">
          <span className="text-3xl mr-3">{icon}</span>
          <Title className="text-xl">{title}</Title>
        </div>
        
        <p className="text-gray-300 text-sm mb-4 flex-grow">
          {description}
        </p>

        <div className="relative">
          <div className="bg-gray-800 border border-gray-600 rounded-lg p-4 mb-4 max-h-48 overflow-y-auto">
            <pre className="text-sm text-gray-200 whitespace-pre-wrap break-words">
              {prompt}
            </pre>
          </div>
          
          <button
            onClick={handleCopy}
            className={`w-full py-3 px-4 rounded-lg font-semibold transition-all duration-300 ${
              copied 
                ? 'bg-green-600 text-white' 
                : 'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white'
            }`}
          >
            {copied ? (
              <div className="flex items-center justify-center space-x-2">
                <span>✅</span>
                <span>Copied!</span>
              </div>
            ) : (
              <div className="flex items-center justify-center space-x-2">
                <span>📋</span>
                <span>Copy Prompt for AI Agent</span>
              </div>
            )}
          </button>
        </div>
      </div>
    </Card>
  );
};

const AIAgentSection = () => {
  const setupPrompt = `Implement the Zustand Controller pattern for state management in the project. 
Follow the comprehensive setup guide at: https://zustandcontroller.1ax.in/assets/setup-instruction.md`;

  const migrationPrompt = `Migrate existing state management to the Zustand Controller pattern.
Follow the comprehensive migration guide at: https://zustandcontroller.1ax.in/assets/migration-instruction.md
`;

  return (
    <section className="py-12 px-4">
      <Card>
        <div className="mb-8">
          <h2 className="text-3xl font-black mb-4">Using AI Agent ? Awesome!</h2>
          <p>
            Let AI agents help you implement or migrate to Zustand Controller pattern.<br/>
            Copy these prompts and paste them into <b>Cursor</b> or any AI coding assistant.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Setup Card */}
          <CopyablePromptCard
            title="Setup New Project"
            icon="🚀"
            description="Perfect for new projects or adding Zustand Controller to existing apps. Get a complete setup with best practices, TypeScript support, and optimized performance."
            prompt={setupPrompt}
          />

          {/* Migration Card */}
          <CopyablePromptCard
            title="Migrate Existing Project"
            icon="🔄"
            description="Safely migrate from Redux, Context API, or other state management solutions. Get a detailed analysis, risk assessment, and step-by-step migration plan."
            prompt={migrationPrompt}
          />
        </div>

        <div className="flex flex-col md:flex-row p-6 bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-lg border border-blue-500/20">
            <div className="flex-1">
                <h3 className="text-lg font-semibold text-white mb-3 flex items-center">
                    💡 Pro Tips for AI Agents
                </h3>
                <div className="flex-1 text-sm text-gray-300">
                <p><b>✅ Be Specific:</b> Describe your current tech stack and requirements</p>
                <p><b>✅ Ask Questions:</b> Request clarification on complex patterns</p>
                <p><b>✅ Test Incrementally:</b> Implement and test each step before proceeding</p>
                <p><b>✅ Follow Links:</b> Reference the instruction guides for detailed examples</p>
                </div>
            </div>
            <div className="flex justify-center">
                <ImgLazy 
                    src="https://astrarudra.github.io/data/images/ai-agents.gif" 
                    alt="AI Agents Animation" 
                    style={{ maxHeight: '160px', width: '160px' }}
                    className="rounded-lg shadow-lg object-cover"
                />
            </div>
          </div>
      </Card>
    </section>
  );
};

export default AIAgentSection; 