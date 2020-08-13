import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Header from './components/Header';
import Cart from './pages/Cart';
import Photos from './pages/Photos';
import Footer from './components/Footer';

function App() {
  return (
    <div className="container">
      <Header />

      <Switch>
        <Route exact path="/">
          <Photos />
        </Route>

        <Route path="/cart">
          <Cart />
        </Route>
      </Switch>

      <Footer />
    </div>
  );
};

export default App;
