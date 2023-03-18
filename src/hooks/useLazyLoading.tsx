import { useCallback, useEffect, useRef, useState } from 'react'

export type Options = {
    distance?: string
    targetPercent?: number
    initPage?: number
}

type returnValues = [
    (propStyle?: React.CSSProperties) => JSX.Element,
    any[],
    (newData: any[]) => void
]
const useLazyLoading = ({ distance, targetPercent, initPage = 0 }: Options, callback: (page: number) => void): returnValues => {
    const [page, setPage] = useState(initPage);
    const [data, setData] = useState<any[]>([]);
    const [stopObserving, setStopObserving] = useState(false);
    const ref = useRef<any>(null)

    const Intersector = useCallback((propStyle?: React.CSSProperties) => {
        return <div style={propStyle} ref={ref}></div>
    }, [])

    useEffect(() => {
        let observer = new IntersectionObserver(([{ isIntersecting }]) => {
            if (isIntersecting) {
                setPage(page + 1)
                callback(page)
            }
        }, { root: null, rootMargin: distance, threshold: targetPercent });
        setTimeout(() => {
            if (!stopObserving) observer.observe(ref.current);
        })

        return () => observer.unobserve(ref.current);
    }, [data, stopObserving]);

    const addData = (newData: any[]) => {
        if (Array.isArray(newData) && newData.length) {
            setData([...data, ...newData]);
        }
        else setStopObserving(true)
    }

    return [Intersector, data, addData];;
}
export default useLazyLoading;

