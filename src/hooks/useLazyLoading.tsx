import { useCallback, useEffect, useRef, useState } from 'react'

export type Options = {
    distance?: string
    targetPercent?: number
    initPage?: number,
    uuidKeeper?: string
}

type returnValues = [
    (propStyle?: React.CSSProperties) => JSX.Element,
    any[],
    (newData: any[]) => void
]

const storData: any = {}
const storPage: any = {}
const useLazyLoading = ({ distance, targetPercent, initPage = 0, uuidKeeper }: Options, callback: (page: number) => void): returnValues => {
    const [page, setPage] = useState(uuidKeeper && storPage[uuidKeeper] || initPage);
    const [data, setData] = useState<any[]>(uuidKeeper && storData[uuidKeeper] || []);
    const [stopObserving, setStopObserving] = useState(false);
    const ref = useRef<any>(null)

    const Intersector = useCallback((propStyle?: React.CSSProperties) => {
        return <div style={propStyle} ref={ref}></div>
    }, [])

    useEffect(() => {
        let observer = new IntersectionObserver(([{ isIntersecting }]) => {
            if (isIntersecting) {
                if (uuidKeeper) storPage[uuidKeeper] = page + 1;
                setPage(page + 1)
                callback(page)
            }
        }, { root: null, rootMargin: distance, threshold: targetPercent });
        setTimeout(() => {
            if (!stopObserving) observer?.observe(ref.current);
        })
        return () => observer.disconnect();
    }, [data, stopObserving]);

    const addData = (newData: any[]) => {
        if (Array.isArray(newData) && newData.length) {
            const newArray = [...data, ...newData]
            if (uuidKeeper) storData[uuidKeeper] = newArray
            setData(newArray);
        }
        else setStopObserving(true)
    }

    return [Intersector, data, addData];
}
export default useLazyLoading;
