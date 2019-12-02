import { h, render } from "preact";
import App from "./components/App";

// Ensure that our root element exists
const root = document.querySelector("#app");

if (!root) {
  throw new Error('App requires <div id="app"></div> in the document body.');
}

render(<App />, root);
