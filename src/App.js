import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch }  from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Contactus from "./pages/Contactus";
import About from "./pages/About";
import Products from "./pages/Products";
import Services from "./pages/Services";


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/contactus" component={Contactus}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/products" component={Products}></Route>
          <Route path="/services" component={Services}></Route>
          
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
