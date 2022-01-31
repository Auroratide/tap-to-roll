import React from 'react'

export type DiceTapperProps = {
    random?: () => number, // [0, 1]
}

export const DiceTapper: React.FC<DiceTapperProps> = ({
    random = Math.random,
}) => {
    const [ output, setOutput ] = React.useState(1)

    const roll = () => setOutput(Math.floor(random() * 6 + 1))

    return (
        <div>
            <button onClick={roll}>Roll d6</button>
            <output>{output}</output>
        </div>
    )
}