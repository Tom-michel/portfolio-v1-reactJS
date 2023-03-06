import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { FloatingMenu } from "../common/FloatingMenu";
import { Header } from "../common/Header";
import { Home } from "../home/Home";

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
    </>
  );
};
