import { useCallback, useEffect, useRef } from 'react'

export type Options = {
    distance?: string
    initPage?: number,
}

type returnValues = { Intersector: () => JSX.Element }
const useLazyScrolling = ({ distance = "0px", initPage = 0 }: Options = {}, callback: (page: number) => void): returnValues => {
    const ref = useRef<any>(null)
    const refPage = useRef(initPage)

    const Intersector = useCallback(() => {
        return <div style={{ height: "1px", width: "1px" }} className='intersector' ref={ref}></div>
    }, [])

    useEffect(() => {
        let observer = new IntersectionObserver(([{ isIntersecting }]) => {
            console.log("intrersecting")
            if (isIntersecting) {
                callback(refPage.current++)
            }
        }, { root: null, rootMargin: distance });
        observer.observe(ref.current)
        return () => observer.unobserve(ref.current);
    }, []);
    return { Intersector };
}
export default useLazyScrolling;