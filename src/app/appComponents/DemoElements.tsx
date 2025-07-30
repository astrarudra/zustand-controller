
import { useOxyStore, OxyController } from "src/shared-state"
import { Button } from '../components/UIElements'
import ControllerCard from "../components/ControllerCard"

export const ControllerTriggerButton = () => {
    const [demoState, fsLoader] = useOxyStore(s => [s.demoState, s.fsLoader])
    const isRunning = demoState > 0 && demoState < 5
    
    return (
        <button
            onClick={() => OxyController.demo()}
            disabled={isRunning}
            className={`px-6 py-3 rounded-lg font-bold text-white transition-all duration-300 ${
                isRunning 
                    ? 'bg-gray-500 cursor-not-allowed opacity-75' 
                    : 'bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 shadow-lg hover:shadow-xl transform hover:scale-105'
            }`}
        >
            {isRunning ? (
                <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Running...</span>
                </div>
            ) : (
                <div className="flex items-center space-x-2">
                    <span>🚀</span>
                    <span>Run Controller</span>
                </div>
            )}
        </button>
    )
}

export const ConnectedComponent = () => {
    const [demoData, demoState, fsLoader] = useOxyStore(s => [s.demoData, s.demoState, s.fsLoader])
    
    const getStatusIcon = () => {
        if (fsLoader) return "⏳"
        if (demoState === 0) return "⭕"
        if (demoState > 0 && demoState < 4) return "🔄"
        if (demoState >= 4) return "✅"
        return "⭕"
    }
    
    const getStatusColor = () => {
        if (fsLoader) return "text-yellow-400"
        if (demoState === 0) return "text-gray-400"
        if (demoState > 0 && demoState < 4) return "text-blue-400"
        if (demoState >= 4) return "text-green-400"
        return "text-gray-400"
    }
    
    return (
        <div className="flex flex-col space-y-2">
            <div className="flex items-center space-x-2">
                <span className={`text-lg ${getStatusColor()}`}>{getStatusIcon()}</span>
                <span className="text-sm font-semibold text-gray-300">
                    Connected Component Status
                </span>
            </div>
            <div className={`p-3 rounded-lg transition-all duration-500 min-h-[60px] flex items-center ${
                demoState >= 4 ? 'bg-green-800/30 border border-green-500/50' : 
                demoState > 0 ? 'bg-blue-800/30 border border-blue-500/50' : 
                'bg-gray-800/50 border border-gray-600/50'
            }`}>
                <div className="text-sm">
                    {fsLoader ? (
                        <div className="flex items-center space-x-2 text-yellow-300">
                            <div className="w-3 h-3 border-2 border-yellow-300 border-t-transparent rounded-full animate-spin"></div>
                            <span className="italic">{fsLoader}</span>
                        </div>
                    ) : demoData ? (
                        <span className={demoState >= 4 ? 'text-green-300 font-medium' : 'text-blue-300'}>
                            {demoData}
                        </span>
                    ) : (
                        <span className="text-gray-400 italic">
                            Waiting for controller to run...
                        </span>
                    )}
                </div>
            </div>
        </div>
    )
}

export const ConnectedControllerCard = () => {
    const [demoState] = useOxyStore(s => [s.demoState])
    return <ControllerCard state={demoState}/>
}