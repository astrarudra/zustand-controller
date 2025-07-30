import { useOxyStore, OxyController, useTemporalStore } from "../shared-state";
import { useEffect } from "react";
import { Card } from "./components/UIElements";
import { ConnectedComponent, ControllerTriggerButton } from "./appComponents/DemoElements";
import CodeSection from "./components/CodeCard";
import ArchitectureSection from "./components/ArchitectureSection";
import { FSLoader } from "./appComponents/ConnectedElelements";
import Header from "./components/Header";
import Footer from "./components/Footer";
import IntroSection from "./components/IntroSection";
const { increase, decrease, resetCounter } = useOxyStore.getState()
const { undo, redo, clear } = useTemporalStore.getState()

const Counter = () => {
  const [ counter ] = useOxyStore(s => [s.counter])
  return (
    <div className="flex justify-center">
      <div className="flex flex-col justify-center items-end mx-2 my-4 w-1/2">
        <div className="bg-[#99f6e4] rounded-lg p-4 w-32 h-32 text-center shadow-md">
          <span className="text-5xl font-bold rounded text-[#1a2053]">{counter}</span>
          <h2 className="text-lg font-bold mt-4">Counter</h2>
        </div>
      </div>
  
      {/* <div className="flex w-1/2">
        <div className="flex flex-col justify-center items-start mx-2">
          <div className="my-2 flex justify-center">
            <Button hitFn={increase} dispText={"add"} isAtLeft={true}/>
            <Button hitFn={decrease} dispText={"minus"} />
          </div>
          <div className="my-2 flex justify-center">
            <Button hitFn={()=>undo()} dispText={"undo"} isAtLeft={true}/>
            <Button hitFn={()=>redo()} dispText={"redo"} isAtLeft={true}/>
          </div>
        </div>
        <div className="mt-14">
          <Button hitFn={clear} dispText={"reset"} />
        </div>
      </div> */}
    </div>
  );
};

export function App() {

  useEffect(() => {
    OxyController.initilize()
  }, [])

  return (
    <div className="text-white">
      <FSLoader />
      <Header />
      <div className="w-screen flex justify-center">
        <div className="" style={{maxWidth: '1280px'}}>
          <IntroSection />
          <CodeSection />
          <ArchitectureSection />
          {/* <Counter/> */}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
