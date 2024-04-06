import { classes } from "src/style";
import ZusControlFlow from "./ZusControlFlow";
import { useOxyStore, OxyController,  useS } from "../shared-state";
import { useEffect } from "react";
const { increment, decrement } = useOxyStore.getState()

const Counter = () => {
  const [ counter ] = useOxyStore(useS(s => 
    [s.counter]))
  return (
    <div>
      <button className={classes.button} onClick={increment} style={{marginRight: 10}}> Increment</button>
      <button className={classes.button} onClick={decrement}> Decrement</button>
      <h2 className="text-xl font-bold mb-2">Counter: {counter}</h2>
    </div>
  );
};

export function App() {

  useEffect(() => {
    OxyController.initilize()
  }, [])

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4">Zustand Controller Repo</h1>
      <Counter/>
      <ZusControlFlow />
    </div>
  );
}

export default App;
