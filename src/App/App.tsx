import { DiceTapper } from '../DiceTapper'
import { Footer } from '../Footer'
import * as classes from './App.module.css'

export const App = () => (
    <div className={classes.container}>
        <main>
            <h1 className={classes.title}>Dice Tapper</h1>
            <DiceTapper />
        </main>
        <Footer />
    </div>
)