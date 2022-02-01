import * as classes from './Instructions.module.css'

export const Instructions = () => (
    <aside className={classes.instructions}>
        <h2 className={classes.title}>Instructions</h2>
        <ol className={classes.list}>
            <li>Tap a die to roll it.</li>
            <li>Tap one or more dice in quick succession to aggregate results.</li>
            <li>After some time, the series ends; tapping a die will start a new series.</li>
            {/* <li>Or, you can press "Clear".</li> */}
        </ol>
    </aside>
)
