import { useOxyStore } from "src/shared-state"
import { FSLoaderIsolated } from "../components/UIElements"

export const FSLoader = () => {
    const [fsLoader] = useOxyStore(s => [s.fsLoader])
    if (fsLoader === null) return null
    return <FSLoaderIsolated message={fsLoader} />
}