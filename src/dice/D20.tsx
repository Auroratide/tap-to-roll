import * as classes from './dice.module.css'

export const D20 = () => (
    <svg className={classes.die} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" aria-hidden="true">
        <title>D20</title>
        <path d="M 60 0 L 112 30 L 112 90 L 60 120 L 8 90 L 8 30 L 60 0 Z" />
    </svg>
)
