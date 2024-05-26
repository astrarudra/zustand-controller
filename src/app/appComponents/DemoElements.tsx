
import { useOxyStore, OxyController } from "src/shared-state"
import { Button } from '../components/UIElements'
import ControllerCard from "../components/ControllerCard"

export const ControllerTriggerButton = () => (
    <Button onClick={() => OxyController.demo()}>
        Run Controller
    </Button>
)

export const ConnectedComponent = () => {
    const [demoData] = useOxyStore(s => [s.demoData])
    return <div>
        {demoData}
    </div>
}

export const ConnectedControllerCard = () => {
    const [demoState] = useOxyStore(s => [s.demoState])
    return <ControllerCard state={demoState}/>
}