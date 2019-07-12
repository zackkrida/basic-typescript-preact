import { h, render } from 'preact'
import App from './components/App'

const appRoot = document.querySelector('#app')
if (!appRoot) throw new Error('App requires <div id="app"></div> in the document body.')

render(<App />, appRoot)
