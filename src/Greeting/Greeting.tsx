import React from 'react'
import * as classes from './Greeting.module.css'

export type GreetingsProps = {
    text: string,
}

export const Greeting: React.FC<GreetingsProps> = ({ text }) => (
    <h1 className={classes.greeting}>Hello {text}!</h1>
)
