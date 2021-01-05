import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import './App.css';

import Login from './components/Login';
import ClientProducts from './components/ClientProducts';
import ManagementProducts from './components/MangementProducts';

function App() {
  return (
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/management-products" component={ManagementProducts} />
          <Route exact path="/client-products"  component={ClientProducts} />
        </Switch>
      </Router>
  );
}

export default App;
