import { useState, useEffect, useRef } from 'react'
import { SquareProgress } from '../SquareProgress'
import * as classes from './TimedGhostResult.module.css'

export type TimedGhostResultProps = {
    start: Date,
    seconds: number,
}

export const TimedGhostResult = ({ start, seconds }: TimedGhostResultProps) => {
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
        <span className={classes['timed-ghost-result']}>
            <SquareProgress max={milliseconds} value={progress} />
        </span>
    )
}