import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./css/App.css";
import Me from "./components/Me";
import Hobbies from "./components/Hobbies";
import Contact from "./components/Contact";
import NotFound from "./components/NotFound";
import NavBar from "./NavBar";
import Thanks from "./components/Thanks";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <NavBar/>
      

        <Switch>
          <Route exact path="/" component={Me} />
          <Route exact path="/me" component={Me} />
          <Route exact path="/hobbies" component={Hobbies} />
          <Route exact path="/Contact" component={Contact} />
          <Route exact path='/thanks' component={Thanks}/>
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
