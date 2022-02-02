import * as classes from './dice.module.css'

export const D100 = () => (
    <svg className={classes.die} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" aria-hidden="true">
        <path d="M 90 20 L 120 80 L 90 120 L 60 80 L 90 20 Z" />
        <path d="M 30 0 L 60 40 L 30 100 L 0 40 L 30 0 Z" />
    </svg>
)
