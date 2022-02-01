import { useRef } from 'react'
import * as classes from './DieButton.module.css'

export type DieButtonProps = {
    onClick: () => void,
    icon: JSX.Element,
    label: string,
}

export const DieButton = ({ onClick, icon, label }: DieButtonProps) => {
    const pulse = useRef<HTMLElement>()

    const animatePulse = () => {
        let elem = pulse.current
        if (elem !== undefined) {
            elem.style.animation = 'none'
            let _ = elem.offsetHeight // trigger reflow
            elem.style.animation = null
            elem.style.animationPlayState = 'running'
        }
    }

    const handleClick = () => {
        onClick()
        animatePulse()
    }

    return (
        <button className={classes['die-button']} onClick={handleClick}>
            <span className={classes.icon}>{icon}</span>
            <span className={classes.label}>{label}</span>
            <span ref={pulse} className={classes.pulse}>{icon}</span>
        </button>
    )
}
