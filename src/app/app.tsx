import ZusControlFlow from "./ZusControlFlow";
import { useOxyStore, OxyController, useS, useTemporalStore } from "../shared-state";
import { useEffect } from "react";
import { Button } from "./Button";
const { increase, decrease, resetCounter } = useOxyStore.getState()

const Counter = () => {
  const [ counter ] = useOxyStore(useS(s => 
    [s.counter ]))
  const { undo, redo } = useTemporalStore(
    (state) => state,
  );
  const reset = () =>{
    resetCounter();
    useTemporalStore.setState({
      pastStates:[],
      futureStates:[],
    });
  }
  return (
    <div className="flex justify-center">
      <div className="flex flex-col justify-center items-end mx-2 my-4 w-1/2">
        <div className="bg-[#99f6e4] rounded-lg p-4 w-32 h-32 text-center shadow-md">
          <span className="text-5xl font-bold rounded text-[#1a2053]">{counter}</span>
          <h2 className="text-lg font-bold mt-4">Counter</h2>
        </div>
      </div>
  
      <div className="flex w-1/2">
        <div className="flex flex-col justify-center items-start mx-2">
          <div className="my-2 flex justify-center">
            <Button hitFn={increase} dispText={"add"} isAtLeft={true}/>
            <Button hitFn={decrease} dispText={"minus"} />
          </div>
          <div className="my-2 flex justify-center">
            <Button hitFn={()=>undo()} dispText={"undo"} isAtLeft={true}/>
            <Button hitFn={()=>redo()} dispText={"redo"} isAtLeft={true}/>
            {/* <Button hitFn={reset} dispText={"reset"} /> */}
          </div>
        </div>
        <div className="mt-14">
          <Button hitFn={reset} dispText={"reset"} />
        </div>
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="bg-[#1a2053] text-white text-center py-3 fixed bottom-0 w-screen">
      © by <a href="https://www.linkedin.com/in/rudraroy1507">Rudra Roy</a> & <a href="https://www.linkedin.com/in/khilesh-sharma/">Khilesh Sharma</a> for you
    </footer>
  );
};

export function App() {

  useEffect(() => {
    OxyController.initilize()
  }, [])

  return (
    <div className="container mx-auto bg-gradient-to-r from-[#fce7f3] to-[#99f6e4] min-h-screen">
      <h1 className="text-3xl font-bold p-4 mb-4 text-center text-[#1a2053]">🐻 Zustand Controller Repo 🐻</h1>
      <ZusControlFlow />
      <Counter/>
      <Footer/>
    </div>
  );
}

export default App;
