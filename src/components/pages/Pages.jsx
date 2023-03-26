import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { FloatingMenu } from "../common/FloatingMenu";
import { Header } from "../common/Header";
import { Footer } from "../common/Footer";
import { Home } from "../home/Home";
import { ScrollTopBtn } from "../common/ScrollTopBtn";

export const Pages = () => {
  return (
    <>
      <Router>
        <Header />
        <FloatingMenu />
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
      <ScrollTopBtn />
      <Footer />
    </>
  );
};
