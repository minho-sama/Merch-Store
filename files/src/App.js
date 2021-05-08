import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Nav from './Components/Nav/Nav';
import Home from './Components/Home/Home';
import Shop from './Components/Shop/Shop';
import Cart from './Components/Cart/Cart';
import ItemPage from './Components/Shop/ItemPage/ItemPage';

function App() {
  document.title = `Bayern Store | Shop`
  return (
    <Router>

      <Nav/>
      <Switch>
        <Route path = "/" exact component = {Home}/>
        <Route path = "/shop" exact component = {Shop} />
        <Route path = "/cart" component = {Cart}/>

        <Route path = "/shop/:id" component = {ItemPage}/>
      </Switch>

    </Router>
  );
}

export default App;