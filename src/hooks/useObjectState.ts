import { useState } from 'react'
type returnValues = [
    any,
    (key: string, value: any) => void,
    () => void
]
const useObjectState = (initObject: object | string[]): returnValues => {
    const initialization = () => {
        let init: any = {};
        if (Array.isArray(initObject)) {
            initObject.forEach((key => {
                init[key] = "";
            }))
            return init;
        }
        return initObject;
    }
    const [state, setState] = useState(initialization);
    const resetState: () => void = () => {
        for (let key in state) {
            state[key] = "";
        }
        setState({ ...state })
    }

    return [state, (key: string, value: any) => setState({ ...state, [key]: value }), resetState]
}

export default useObjectState