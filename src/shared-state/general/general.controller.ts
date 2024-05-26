import { useOxyStore } from "../OxyStore";
const { setState, setLoader } = useOxyStore.getState()

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

export interface IGeneralController {
    initilize: () => void;
    demo: () => void;
    demoPure: () => void; // without delay.
}

export const generalController: IGeneralController = {
    initilize: () => {
        console.log("General Controller Initialized");
    },
    demo: async () => {
        setState({ demoData: "Demo Controller Initialized...", demoState: 1})
        await delay(1000)
        const s = useOxyStore.getState()
        setState({ demoData: "getState => Console.log, check!", demoState: 2})
        console.log("From getState( - ", s)
        await delay(2000)
        setState({ demoData: "Calling an API - getGist Raw", demoState: 3})
        setLoader("Loading Gist Data")
        await delay(2000)
        const response = await fetch('https://gist.githubusercontent.com/astrarudra/173987735f09c1e127a3aa8ebf188c95/raw')
        const json = await response.json()
        console.log("Data from Gist", json)
        setState({ demoData: json.data, demoState: 4, fsLoader: null})
    },
    demoPure: async () => {
        setState({ demoData: "Calling an API - getGist Raw", demoState: 2, fsLoader: "Loading Gist Data"})
        const response = await fetch('https://gist.githubusercontent.com/astrarudra/173987735f09c1e127a3aa8ebf188c95/raw')
        const json = await response.json()
        setState({ demoData: json.data, demoState: 3, fsLoader: null})
    }
}
  