import { useRef } from 'react'

/**
 * Provides a way to continually restart a timeout, the handler only
 * being invoked once the designated time has passed without a restart.
 */
export const useRestartableTimeout = (handler: () => void): [
    (milliseconds: number) => void,
    () => void,
] => {
    const timeoutId = useRef<number>(undefined)

    const endCurrentTimer = () => {
        if (timeoutId.current !== undefined) {
            window.clearTimeout(timeoutId.current)
        }
    }

    const restartTimer = (milliseconds: number) => {
        endCurrentTimer()

        timeoutId.current = window.setTimeout(handler, milliseconds)
    }

    return [ restartTimer, endCurrentTimer ]
}
