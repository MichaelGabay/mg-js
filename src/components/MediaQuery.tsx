import React, { useEffect, useState } from 'react'
type props = {
    minWidth?: number,
    maxWidth?: number,
    children?: any
}
const MediaQuery: React.FC<props> = ({ minWidth, maxWidth, children }) => {
    const [isMatch, setIsMatch] = useState(false);
    useEffect(() => {
        let mediaQuery = "";
        if (minWidth && maxWidth) {
            mediaQuery = `(min-width: ${minWidth}px) and (max-width: ${maxWidth}px)`
        }
        else if (minWidth) {
            mediaQuery = `(min-width: ${minWidth}px)`
        }
        else if (maxWidth) {
            mediaQuery = `(max-width: ${maxWidth}px)`
        }
        const media = window.matchMedia(mediaQuery);
        setIsMatch(media.matches);
        media.addEventListener("change", ({ matches }) => {
            setIsMatch(matches)
        })
    }, [])
    if (isMatch) return children
}

export default MediaQuery