import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import Contact from "./Contact";
import Stuff from "./Stuff";
import Home from "./Home";
import "bootstrap/dist/css/bootstrap.css";

class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <nav class="navbar navbar-expand-lg navbar-light bg-primary">
            <a class="navbar-brand text-white" href="#">KB</a>
            
            <ul class="navbar-nav ml-auto">
              <li class="nav-item active">
                <NavLink className="nav-link text-white" to="/">Home <span class="sr-only">(current)</span></NavLink>
              </li>
              
              <li class="nav-item">
                <NavLink className="nav-link text-white" to="/stuff">stuff</NavLink>
              </li>
              
              <li class="nav-item">
                <NavLink className="nav-link text-white" to="/contact">contact</NavLink>
              </li>
              
            </ul>
          </nav>
      </div>
          <div className="content container mt-2">
            <Route exact path="/" component={Home} />
            <Route path="/stuff" component={Stuff} />
            <Route path="/contact" component={Contact} />
          </div>
      </HashRouter>
    );
  }
}

export default Main;
