import { useEffect, useRef, useState } from "react"

export function useHover() {
    const [hovered, setHovered] = useState(false)
    const ref = useRef(null)
    const handleMouseOver = () => setHovered(true)
    const handleMouseOut = () => setHovered(false)
    useEffect(() => {
        const node = ref.current
        if(!node)return
        node.addEventListener('mouseover', handleMouseOver)
        node.addEventListener('mouseout', handleMouseOut)
        
        return() => {
            node.removeEventListener('mouseover', handleMouseOver)
            node.removeEventListener('mouseout', handleMouseOut)
        }
    }, [])
    return{
        hovered,
        ref,
    }
}