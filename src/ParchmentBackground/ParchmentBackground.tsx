import { ReactNode } from 'react'
import * as classes from './ParchmentBackground.module.css'

export type ParchmentBackgroundProps = {
    children: ReactNode,
}

export const ParchmentBackground = ({ children }: ParchmentBackgroundProps) => (
    <div className={classes['parchment-background']}>
        <svg className={classes['parchment-effect']} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" aria-hidden="true">
            <filter id="parchment-filter">
                <feTurbulence type="fractalNoise" baseFrequency="0.15" numOctaves="5" stitchTiles="stitch" />
                <feColorMatrix type="matrix" values="
                    1 0.75 0 0 0
                    0.5 0.75 0 0 0
                    0 0 0 0 0
                    0 0 0 0.5 0
                " />
                <feBlend in="SourceGraphic" mode="saturation" />
            </filter>
            <rect filter="url(#parchment-filter)" width="100" height="100" />
        </svg>
        {children}
    </div>
)
