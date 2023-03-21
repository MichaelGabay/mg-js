import { useState } from 'react'
type returnValues = [
    any,
    (keyOrObject: string | object, value?: any) => void,
    (resetVal: any) => void
]

const useObjectState = (initObject: object | string[]): returnValues => {
    const initialization = () => {
        let init: any = {};
        if (Array.isArray(initObject)) {
            initObject.forEach((key => {
                if (typeof key === "object") {
                    for (let innerKey in key) {
                        init[innerKey] = key[innerKey]
                    }
                }
                else {
                    init[key] = "";
                }
            }))
            return init;
        }
        return initObject;
    }
    const [state, setState] = useState(initialization);
    const updateState = (keyOrObject: string | object, value: any) => {
        if (typeof keyOrObject === "object") {
            setState({ ...state, ...keyOrObject })
        }
        else {
            setState({ ...state, [keyOrObject]: value })
        }
    }
    const resetState = (resetVal) => {
        for (let key in state) {
            state[key] = resetVal;
        }
        setState({ ...state })
    }

    return [state, updateState, resetState]
}

export default useObjectState