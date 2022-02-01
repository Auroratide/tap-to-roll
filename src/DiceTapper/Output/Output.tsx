import { ReactNode } from 'react'
import * as classes from './Output.module.css'

export type OutputProps = {
    id: string,
    label: string,
    children: ReactNode,
}

export const Output = ({ id, label, children }: OutputProps) => (
    <div className={classes.output}>
        <label htmlFor={id}>{label}</label>
        <output id={id}>{children}</output>
    </div>
)