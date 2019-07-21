import { h, render } from 'preact'
import App from './components/App'

// Ensure that our root element exists
const appRoot = document.querySelector('#app')
if (!appRoot) throw new Error('App requires <div id="app"></div> in the document body.')

render(<App />, appRoot)
