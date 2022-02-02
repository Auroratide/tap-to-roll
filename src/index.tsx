import ReactDOM from 'react-dom'
import { DiceTapper } from './DiceTapper'

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register(
        new URL('service-worker.ts', import.meta.url),
        { type: 'module' }
    )
}

ReactDOM.render(<DiceTapper />, document.getElementById('app'))
