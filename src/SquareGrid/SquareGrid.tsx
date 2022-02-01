import { CSSProperties } from 'react'
import * as classes from './SquareGrid.module.css'

export type SquareGridProps = {
    columns: number,
    children: JSX.Element[],
}

type CssWithCustomProps = CSSProperties & {
    '--square-grid-columns': number,
}

export const SquareGrid = ({ columns, children }: SquareGridProps) => (
    <div style={{ '--square-grid-columns': columns } as CssWithCustomProps} className={classes['square-grid']}>
        {children.map((child, i) => (
            <div key={i} className={classes.cell}>
                <div className={classes.item}>
                    {child}
                </div>
            </div>
        ))}
    </div>
)
