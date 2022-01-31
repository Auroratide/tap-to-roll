import ReactDOM from 'react-dom'
import { Greeting } from './Greeting'
import { DiceTapper } from './DiceTapper'

ReactDOM.render(
    <main>
        <Greeting text="world" />
        <DiceTapper />
    </main>,
    document.getElementById('root')
)