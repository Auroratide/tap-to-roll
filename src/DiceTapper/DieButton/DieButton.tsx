import * as classes from './DieButton.module.css'

export type DieButtonProps = {
    onClick: () => void,
    icon: JSX.Element,
    label: string,
}

export const DieButton = ({ onClick, icon, label }: DieButtonProps) => (
    <button className={classes['die-button']} onClick={onClick}>
        <span className={classes.icon}>{icon}</span>
        <span className={classes.label}>{label}</span>
    </button>
)
