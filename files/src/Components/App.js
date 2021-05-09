import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Nav from './Nav/Nav';
import Home from './Home/Home';
import Shop from './Shop/Shop';
import Cart from './Cart/Cart';
import ItemPage from './Shop/ItemPage/ItemPage';

import {CartProvider} from './CartContext';

function App() {
  document.title = `Bayern Store | Shop`

  return (
    <Router>
    <CartProvider>
      <Nav/>
      <Switch>
        <Route path = "/Merch-Store" exact component = {Home}/>
        <Route path = "/shop" exact component = {Shop} />


          <Route path = "/cart" component = {Cart}/>

        <Route path = "/shop/:id" component = {ItemPage}/>
      </Switch>
    </CartProvider>

    </Router>
  );
}

export default App;