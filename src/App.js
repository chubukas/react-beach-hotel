import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/home";
import Rooms from "./pages/rooms";
import SingleRoom from "./pages/singleroom";
import Error from "./pages/error";
import Navbar from "./component/navbar";

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/rooms" component={Rooms} />
          <Route exact path="/rooms/:slug" component={SingleRoom} />
          <Route component={Error} />
        </Switch>
      </React.Fragment>
    );
  }
}
