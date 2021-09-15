import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./Home";
import NavLinks from "./component/NavLinks";
import About from "./component/About/About";
import MyProject from "./component/Project/MyProject";
import MyServices from "./component/MyServices/MyServices";
import ContactMe from "./component/ContactMe/ContactMe";
import Footer from "./component/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavLinks />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/project" component={MyProject} />
          <Route path="/services" component={MyServices} />
          <Route path="/contact" component={ContactMe} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
