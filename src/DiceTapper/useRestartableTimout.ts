import { useState } from 'react'

/**
 * Provides a way to continually restart a timeout, the handler only
 * being invoked once the designated time has passed without a restart.
 */
export const useRestartableTimout = (handler: () => void): [
    (milliseconds: number) => void,
    () => void,
] => {
    const [ timeoutId, setTimeoutId ] = useState<number>(undefined)

    const endCurrentTimer = () => {
        if (timeoutId !== undefined) {
            window.clearTimeout(timeoutId)
        }
    }

    const restartTimer = (milliseconds: number) => {
        endCurrentTimer()

        setTimeoutId(window.setTimeout(handler, milliseconds))
    }

    return [ restartTimer, endCurrentTimer ]
}
