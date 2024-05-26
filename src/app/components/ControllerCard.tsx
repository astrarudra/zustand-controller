import { Card, Title } from "./UIElements";

const Step = ({ children }: any) => {
    return (
      <div className="flex items-center">
        <p className="bg-gray-600 px-4 py-2 rounded-lg">
          {children}
        </p>
      </div>
    );
}; 

const Line = ({ filled = false }) => {
    return (
      <div className={`w-1 h-12 transition-all duration-1000 ${filled ? 'bg-green-500' : 'bg-gray-500'}`}></div>
    );
};
const StepLine = ({ step, current, title, details }: any) => {
  const done = current >= step
  return <>
    <Step>
        <Title className={done ? undefined : "text-white"}>{title}</Title>
        {details}
    </Step>
    <Line filled={done}/>
  </>
}

const ControllerCard = ({state}: any) => (
    <Card>
    <h2 className="text-3xl font-black mb-4">Controller - The Saga Slayer</h2>
    <div className="flex flex-col items-center pt-2 text-center cool-text">
      <StepLine step={1} current={state} title="Initialize" details={<>Initialize the <b>Controller</b></>}/>
      <div className="relative flex flex-col items-center">
            <div className="dashed-box"></div>
            <div className="absolute" style={{left: '-35px', top: '-40px'}}>
                Controller - Demo()
            </div>
            <StepLine step={2} current={state} title="getState, setState" details={<><b>Read</b> Store Data. <b>Set</b> a Loader</>}/>
            <StepLine step={3} current={state} title="API Call" details={<>Make your <b>Network</b> call</>}/>
            <StepLine step={4} current={state} title="setState" details={<>Set the <b>data</b> & end the Loader</>}/>
        </div>
      <Step>
        <Title className={state !==4 ? "text-white": undefined}>Connected Component</Title>
        Will <b>Reflect</b> the changes
      </Step>
    </div>
  </Card>
)

export default ControllerCard;