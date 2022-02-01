import type { RollResult } from '../die'
import { dieForSides } from '../../dice'
import * as classes from './ShowRollResult.module.css'

export type ShowRollResultProps = {
    result: RollResult,
}

export const ShowRollResult = ({ result }: ShowRollResultProps) => (
    <span className={classes['show-roll-result']}>
        <span className={classes.icon}>{dieForSides[result.sides]()}</span>
        <span className={classes.value}>{result.value}</span>
    </span>
)