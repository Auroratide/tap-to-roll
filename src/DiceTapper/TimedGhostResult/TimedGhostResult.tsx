import { useState, useEffect, useRef } from 'react'
import { SquareProgress } from '../SquareProgress'
import * as classes from './TimedGhostResult.module.css'

export type TimedGhostResultProps = {
    start: Date,
    seconds: number,
    accessible?: boolean,
}

export const TimedGhostResult = ({ start, seconds, accessible = false }: TimedGhostResultProps) => {
    const milliseconds = seconds * 1000
    const frameRequest = useRef<number>()
    const [ progress, setProgress ] = useState(0)

    const tick = () => {
        const newProgress = Date.now() - start.getTime()
        setProgress(newProgress)

        if (newProgress < milliseconds)
            frameRequest.current = requestAnimationFrame(tick)
    }

    useEffect(() => {
        frameRequest.current = requestAnimationFrame(tick)

        return () => cancelAnimationFrame(frameRequest.current)
    }, [start])

    return (
        // Hiding from accessibility tree, as it gets in the way of announcing a roll result
        <span className={classes['timed-ghost-result']} aria-hidden={accessible ? undefined : 'true'}>
            <SquareProgress max={milliseconds} value={progress} />
        </span>
    )
}