import { useState } from 'react'

/**
 * Represents a series of items that, when ended, can be restarted
 * with a fresh array. The `addItem` bit understands when a series
 * is over and hence when to restart the array's contents.
 */
export const useSeries = <T>(initial: T[]): [
    T[],
    (item: T) => void,
    () => void,
    () => void,
    boolean,
    () => void,
] => {
    const [ items, setItems ] = useState(initial)
    const [ inSeries, setInSeries ] = useState(false)

    const addItem = (item: T) => {
        if (inSeries) {
            setItems([...items, item])
        } else {
            setItems([item])
            setInSeries(true)
        }
    }

    const removeLast = () => {
        setItems(items.slice(0, -1))
    }

    const endSeries = () => setInSeries(false)
    const reset = () => setItems([])

    return [
        items,
        addItem,
        removeLast,
        endSeries,
        inSeries,
        reset,
    ]
}