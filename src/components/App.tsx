import { Router, RoutableProps } from "preact-router";
import { h, FunctionComponent, Fragment } from "preact";

let Home: FunctionComponent<RoutableProps> = () => (
  <div>
    <h1>Home</h1>
  </div>
);

let Dash: FunctionComponent<RoutableProps> = () => (
  <div>
    <h1>Dashboard</h1>
  </div>
);

export default function App() {
  return (
    <Fragment>
      <nav>
        <a href="/">Home</a> | <a href="/dashboard">Dashboard</a>
      </nav>

      <Router>
        <Home path="/" />
        <Dash path="/dashboard" />
      </Router>
    </Fragment>
  );
}
