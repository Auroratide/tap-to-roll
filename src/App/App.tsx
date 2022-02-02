import { DiceTapper } from '../DiceTapper'
import { Footer } from '../Footer'
import { ParchmentBackground } from '../ParchmentBackground'
import * as classes from './App.module.css'

export const App = () => (
    <ParchmentBackground>
        <div className={classes.container}>
            <main>
                <h1 className={classes.title}>Tap to Roll</h1>
                <DiceTapper />
            </main>
            <Footer />
        </div>
    </ParchmentBackground>
)