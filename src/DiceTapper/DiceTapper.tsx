import React from 'react'

export type DiceTapperProps = {
    random?: () => number, // [0, 1]
}

export const DiceTapper: React.FC<DiceTapperProps> = ({
    random = Math.random,
}) => {
    return (
        <div>
            <button>Roll d6</button>
            <output>4</output>
        </div>
    )
}