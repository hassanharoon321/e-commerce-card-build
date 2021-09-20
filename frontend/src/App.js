import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Navbar} />
        <Route exact path="/product:id" component={} />
      </Switch>
    </Router>
  );
}

export default App;
