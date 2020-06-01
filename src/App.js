import React from "react";
import "./App.css";
import { Route, Link } from "react-router-dom";
import HomePage from "./components/pages/home/homepage.component";
import ShopPage from "./components/pages/shop/shop.component";

const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
);

function App() {
  return (
    <div>
      <div className="linkto">
        <Link to="/">HomePage</Link>
        <Link to="/shop">Shop Page</Link>
      </div>
      <Route exact path="/" component={HomePage} />
      <Route path="/hats" component={HatsPage} />
      <Route exact path="/shop" component={ShopPage} />
    </div>
  );
}

export default App;
