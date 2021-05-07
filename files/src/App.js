import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Nav from './Components/Nav/Nav';
import Home from './Components/Home/Home';
import Shop from './Components/Shop/Shop';
import Cart from './Components/Cart/Cart';

function App() {
  return (
    <Router>

      <Nav/>
      <Switch>
        <Route path = "/" exact component = {Home}/>
        <Route path = "/shop" component = {Shop} />
        <Route path = "/cart" component = {Cart}/>
      </Switch>

    </Router>
  );
}

export default App;