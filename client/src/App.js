import "./App.css";
import React from "react";
import Landing from "./pages/Landing/Landing";
import { Redirect, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/home" component={Landing} />
        {/* <Route path="/not-found" component={NotFound} /> */}
        <Redirect from="/" exact to="/home" />
        {/* <Redirect to="/not-found" /> */}
      </Switch>
      <Footer />
    </>
  );
}

export default App;
