import { ReactNode } from 'react'
import * as classes from './Output.module.css'

export type OutputProps = {
    id: string,
    label: string,
    children: ReactNode,
    nolive?: boolean,
}

export const Output = ({ id, label, children, nolive = false }: OutputProps) => (
    <div className={classes.output}>
        <label htmlFor={id}>{label}</label>
        <output aria-live={nolive ? 'off' : undefined} id={id}>{children}</output>
    </div>
)