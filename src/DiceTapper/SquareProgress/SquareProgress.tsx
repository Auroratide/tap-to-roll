import * as classes from './SquareProgress.module.css'

export type SquareProgressProps = {
    max: number,
    value: number,
}

export const SquareProgress = ({ max, value }: SquareProgressProps) => (<>
    <progress className="visually-hidden" max={max} value={value}>
        <span>{value / max * 100}%</span>
    </progress>
    <svg className={classes['square-progress']} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" aria-hidden="true">
        <path strokeDashoffset={400 * (1 - value / max)} d="M 10 10 H 110 V 110 H 10 V 10 Z" />
    </svg>
</>)
