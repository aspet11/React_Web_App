import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import Page from "react-page-loading";
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.min.js";
import "animate.css/animate.min.css";

// Template CSS Style
import "./assets/css/style.css";
import "./assets/css/responsive.css";

// For RTL Style Comment Out The Below rtl.css
// import "./assets/css/rtl.css";

//Component Import
import HomeOne from "./pages/HomeOne";
import HomeTwo from "./pages/HomeTwo";
import HomeThree from "./pages/HomeThree";

class App extends Component {
  render() {
    return (
        <div className="App">
            <div>
                <Page loader={"bubble-spin"} color={"#71c21b"} size={9}>
                    <Switch >
                        <Route
                            path="/home-three"
                            component={HomeThree}
                        />
                        <Route
                            path="/home-two"
                            component={HomeTwo}
                        />
                        <Route
                            path="/"
                            component={HomeOne}
                        />
                    </Switch>
                </Page>
            </div>
      </div>
    );
  }
}
export default App;
