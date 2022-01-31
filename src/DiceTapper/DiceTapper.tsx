import React from 'react'
import { die, Die } from './die'
import { useSeries } from './useSeries'

export type DiceTapperProps = {
    id?: string,
    secondsUntilNewRollSeries?: number,
    random?: () => number, // [0, 1]
}

export const DiceTapper: React.FC<DiceTapperProps> = ({
    id = 'dice-tapper',
    secondsUntilNewRollSeries = 4,
    random = Math.random,
}) => {
    const [ rolls, addRoll, endRollSeries ] = useSeries([])
    const sum = rolls.reduce((a, b) => a + b, 0)

    const ids = {
        sum: `${id}-sum`,
        rolls: `${id}-rolls`,
    }

    const roll = (rollDie: Die) => () => addRoll(rollDie(random))

    const [ newSeriesTimeoutId, setNewSeriesTimeoutId ] = React.useState<number>(undefined)
    React.useEffect(() => {
        if (newSeriesTimeoutId !== undefined) {
            window.clearTimeout(newSeriesTimeoutId)
        }

        setNewSeriesTimeoutId(window.setTimeout(endRollSeries, secondsUntilNewRollSeries * 1000))
    }, [rolls])

    return (
        <article>
            <fieldset>
                <legend>Dice</legend>
                <button onClick={roll(die(4))}>d4</button>
                <button onClick={roll(die(6))}>d6</button>
                <button onClick={roll(die(8))}>d8</button>
                <button onClick={roll(die(10))}>d10</button>
                <button onClick={roll(die(12))}>d12</button>
                <button onClick={roll(die(20))}>d20</button>
            </fieldset>
            <section>
                <label htmlFor={ids.sum}>Sum</label>
                <output id={ids.sum}>{sum}</output>
            </section>
            <section>
                <label htmlFor={ids.rolls}>Rolls</label>
                <output id={ids.rolls}>{rolls.join(' ')}</output>
            </section>
        </article>
    )
}