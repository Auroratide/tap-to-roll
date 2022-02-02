import * as classes from './Instructions.module.css'

export const Instructions = () => (
    <aside className={classes.instructions} aria-label="Instructions">
        <h2 className={classes.title}>Instructions</h2>
        <ol className={classes.list}>
            <li>Tap a die to roll it.</li>
            <li>Tap one or more dice in quick succession to aggregate results. For example, to roll <b>8d6</b>, tap "d6" eight times.</li>
            <li>After some time, the series ends; tapping a die will start a new series.</li>
            <li>Or, you can press "Clear".</li>
        </ol>
    </aside>
)
