import { useState, useEffect } from 'react'
import { SquareProgress } from '../SquareProgress'
import * as classes from './TimedGhostResult.module.css'

export type TimedGhostResultProps = {
    start: Date,
    seconds: number,
}

export const TimedGhostResult = ({ start, seconds }: TimedGhostResultProps) => {
    const milliseconds = seconds * 1000
    const [ progress, setProgress ] = useState(0)
    const [ frameRequest, setFrameRequest ] = useState<number>(undefined)

    const tick = () => {
        const newProgress = Date.now() - start.getTime()
        setProgress(newProgress)

        if (newProgress < milliseconds)
            setFrameRequest(requestAnimationFrame(tick))
    }

    // We need to make sure to cancel the latest request when `start` is updated
    useEffect(() => {
        return () => cancelAnimationFrame(frameRequest)
    }, [start, frameRequest])

    useEffect(() => {
        cancelAnimationFrame(frameRequest)
        setFrameRequest(requestAnimationFrame(tick))

        return () => cancelAnimationFrame(frameRequest)
    }, [start])

    return (
        <span className={classes['timed-ghost-result']}>
            <SquareProgress max={milliseconds} value={progress} />
        </span>
    )
}