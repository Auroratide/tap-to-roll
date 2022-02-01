import React from 'react'
import { die, Die } from './die'
import { useSeries } from './useSeries'
import { useRestartableTimout } from './useRestartableTimout'
import * as classes from './DiceTapper.module.css'
import { DieButton } from './DieButton'
import { D4, D6, D8, D10, D12, D20 } from '../dice'

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
    const min = rolls.length > 0 ? Math.min(...rolls) : ''
    const sum = rolls.reduce((a, b) => a + b, 0)
    const max = rolls.length > 0 ? Math.max(...rolls) : ''

    const ids = {
        min: `${id}-min`,
        sum: `${id}-sum`,
        max: `${id}-max`,
        rolls: `${id}-rolls`,
    }

    const roll = (rollDie: Die) => () => addRoll(rollDie(random))

    const [ restartSeriesTimeout, endSeriesTimeout ] = useRestartableTimout(endRollSeries)
    React.useEffect(() => {
        restartSeriesTimeout(secondsUntilNewRollSeries * 1000)
        return endSeriesTimeout
    }, [rolls])

    return (
        <article className={classes['dice-tapper']}>
            <fieldset className={classes.dice}>
                <legend>Dice</legend>
                <DieButton onClick={roll(die(4))} icon={<D4 />} label="d4" />
                <DieButton onClick={roll(die(6))} icon={<D6 />} label="d6" />
                <DieButton onClick={roll(die(8))} icon={<D8 />} label="d8" />
                <DieButton onClick={roll(die(10))} icon={<D10 />} label="d10" />
                <DieButton onClick={roll(die(12))} icon={<D12 />} label="d12" />
                <DieButton onClick={roll(die(20))} icon={<D20 />} label="d20" />
            </fieldset>
            <section className={classes.aggregation}>
                <div className={classes.output}>
                    <label htmlFor={ids.min}>Min</label>
                    <output id={ids.min}>{min}</output>
                </div>
                <div className={classes.output}>
                    <label htmlFor={ids.sum}>Sum</label>
                    <output id={ids.sum}>{sum}</output>
                </div>
                <div className={classes.output}>
                    <label htmlFor={ids.max}>Max</label>
                    <output id={ids.max}>{max}</output>
                </div>
            </section>
            <section>
                <div className={classes.output}>
                    <label htmlFor={ids.rolls}>Rolls</label>
                    <output id={ids.rolls}>{rolls.join(' ')}</output>
                </div>
            </section>
        </article>
    )
}