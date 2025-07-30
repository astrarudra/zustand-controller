import { Card, Title } from "./UIElements";

const Step = ({ children, isActive, isCompleted }: any) => {
    return (
      <div className="flex items-center justify-center">
        <p className={`px-3 py-2 rounded-lg transition-all duration-500 text-center text-sm ${
          isActive 
            ? 'bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg scale-105 animate-pulse' 
            : isCompleted 
              ? 'bg-gradient-to-r from-green-500 to-green-600 shadow-md' 
              : 'bg-gray-600'
        }`}>
          {children}
        </p>
      </div>
    );
}; 

const Line = ({ height = '20px', filled = false, isActive = false }) => {
    return (
      <div style={{height: height}} className={`w-1 transition-all duration-1000 ${
        isActive 
          ? 'bg-gradient-to-b from-blue-400 to-purple-500 animate-pulse shadow-lg' 
          : filled 
            ? 'bg-gradient-to-b from-green-400 to-green-600' 
            : 'bg-gray-500'
      }`}></div>
    );
};

const StepLine = ({ step, current, title, details, height, isLast = false }: any) => {
  const isCompleted = current > step;
  const isActive = current === step;
  
  return (
    <div className="flex flex-col items-center">
      <Step isActive={isActive} isCompleted={isCompleted}>
        <Title className={`text-base ${isCompleted || isActive ? undefined : "text-white"}`}>{title}</Title>
        <div className={`transition-all duration-300 text-xs ${isActive ? 'font-semibold' : ''}`}>
          {details}
        </div>
      </Step>
      {!isLast && <Line filled={isCompleted} isActive={isActive} height={height}/>}
    </div>
  );
};

const ControllerCard = ({state}: any) => (
    <Card>
    <h2 className="text-2xl font-black mb-3">Controller - The Saga Slayer</h2>
    <div className="flex flex-col items-center pt-2 text-center cool-text">
      <StepLine step={1} height="60px" current={state} title="Initialize" details={<>Initialize the <b>Controller</b></>}/>
      
      <div className="relative flex flex-col items-center">
        {/* Enhanced dashed box with animation */}
        <div className={`dashed-box transition-all duration-1000 ${
          state >= 2 && state <= 4 
            ? 'border-blue-400 shadow-lg animate-pulse' 
            : state > 4 
              ? 'border-green-400' 
              : 'border-red-500'
        }`}></div>
        
        {/* Controller label with enhanced styling */}
        <div className={`absolute text-xs font-bold px-2 py-1 rounded transition-all duration-500 ${
          state >= 2 && state <= 4 
            ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg' 
            : state > 4 
              ? 'bg-gradient-to-r from-green-500 to-green-600 text-white' 
              : 'bg-gray-700 text-gray-300'
        }`} style={{right: '-45px', top: '-33px'}}>
          {state >= 2 && state <= 4 && (
            <span className="inline-block w-2 h-2 bg-white rounded-full animate-ping mr-1"></span>
          )}
          Controller - Demo()
        </div>
        
        <StepLine step={2} height="30px" current={state} title="getState, setState" details={<><b>Read</b> Store Data. <b>Set</b> a Loader</>}/>
        <StepLine step={3} height="30px"current={state} title="API Call" details={<>Make your <b>Network</b> call</>}/>
        <StepLine step={4} height="50px" current={state} title="setState" details={<>Set the <b>data</b> & end the Loader</>}/>
      </div>
      
      {/* Final step with no line at bottom */}
      <StepLine 
        step={5} 
        current={state === 4 ? 5 : state} 
        title="Connected Component" 
        details={<>Will <b>Reflect</b> the changes</>}
        isLast={true}
      />
    </div>
  </Card>
)

export default ControllerCard;