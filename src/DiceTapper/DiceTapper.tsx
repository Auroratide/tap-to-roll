import React from 'react'
import { die, Die, RollResult } from './die'
import { useSeries } from './useSeries'
import { useRestartableTimeout } from './useRestartableTimeout'
import * as classes from './DiceTapper.module.css'
import { DieButton } from './DieButton'
import { D2, D4, D6, D8, D10, D12, D20, D100 } from '../dice'
import { SquareGrid } from '../SquareGrid'
import { ShowRollResult } from './ShowRollResult'
import { Output } from './Output'
import { Instructions } from './Instructions'
import { TimedGhostResult } from './TimedGhostResult'

export type DiceTapperProps = {
    id?: string,
    secondsUntilNewRollSeries?: number,
    random?: () => number, // [0, 1]
}

export const DiceTapper = ({
    id = 'dice-tapper',
    secondsUntilNewRollSeries = 4,
    random = Math.random,
}: DiceTapperProps) => {
    const [ rolls, addRoll, removeRoll, endRollSeries, inRollSeries, resetRolls ] = useSeries<RollResult>([])
    const rollValues = rolls.map(it => it.value)
    const min = rollValues.length > 0 ? Math.min(...rollValues) : '-'
    const sum = rollValues.reduce((a, b) => a + b, 0)
    const max = rollValues.length > 0 ? Math.max(...rollValues) : '-'

    const ids = {
        min: `${id}-min`,
        sum: `${id}-sum`,
        max: `${id}-max`,
        rolls: `${id}-rolls`,
    }

    const roll = (rollDie: Die) => () => addRoll(rollDie(random))

    const [ restartSeriesTimeout, endSeriesTimeout ] = useRestartableTimeout(endRollSeries)
    const [ timeSeriesStarted, setTimeSeriesStarted ] = React.useState(new Date())
    React.useEffect(() => {
        if (rolls.length > 0) {
            restartSeriesTimeout(secondsUntilNewRollSeries * 1000)
            setTimeSeriesStarted(new Date())
            return endSeriesTimeout
        } else {
            endSeriesTimeout()
            endRollSeries()
        }
    }, [rolls])

    const clear = () => {
        endSeriesTimeout()
        endRollSeries()
        resetRolls()
    }

    const undo = () => {
        removeRoll()
    }

    return (
        <article className={classes['dice-tapper']} aria-label="Tap to Roll Widget">
            <h2 className='visually-hidden'>Dice</h2>
            <fieldset className={classes['dice-container']}>
                <legend className='visually-hidden'>Dice</legend>
                <SquareGrid columns={2}>
                    <DieButton onClick={roll(die(4))} icon={<D4 />} label="d4" />
                    <DieButton onClick={roll(die(6))} icon={<D6 />} label="d6" />
                    <DieButton onClick={roll(die(8))} icon={<D8 />} label="d8" />
                    <DieButton onClick={roll(die(10))} icon={<D10 />} label="d10" />
                    <DieButton onClick={roll(die(12))} icon={<D12 />} label="d12" />
                    <DieButton onClick={roll(die(20))} icon={<D20 />} label="d20" />
                    <DieButton onClick={roll(die(100))} icon={<D100 />} label="d100" />
                    <DieButton onClick={roll(die(2))} icon={<D2 />} label="d2" />
                </SquareGrid>
            </fieldset>
            <section className={classes.results}>
                <h2 className='visually-hidden'>Results</h2>
                <section className={classes.aggregation}>
                    <Output id={ids.min} label="Min" nolive>{min}</Output>
                    <Output id={ids.sum} label="Sum" nolive>{sum}</Output>
                    <Output id={ids.max} label="Max" nolive>{max}</Output>
                </section>
                <section className={classes.rolls}>
                    <Output id={ids.rolls} label="Rolls"><>
                        {rolls.map((roll, i) => (
                            <ShowRollResult key={i} result={roll} />
                        ))}
                        {inRollSeries && <TimedGhostResult start={timeSeriesStarted} seconds={secondsUntilNewRollSeries} />}
                    </></Output>
                </section>
            </section>
            <section className={classes.actions}>
                <button onClick={clear}>Clear</button>
                <button onClick={undo}>Undo</button>
            </section>
            <Instructions />
        </article>
    )
}