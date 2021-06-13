import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Service from './Pages/Service';
import HowWork from './Pages/HowWorks';
import AboutUs from './Pages/AboutUs';
import Blog from './Pages/Blog';
import Contact from './Pages/Contact';
import Home from './Pages/Home';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/service">
          <Service />
          </Route>
          <Route path="/howWeWork">
          <HowWork />
          </Route>
          <Route path="/aboutUs">
          <AboutUs />
          </Route>
          <Route path="/ourTeam">
          <Service />
          </Route>
          <Route path="/blog">
          <Blog />
          </Route>
          <Route path="/contact">
          <Contact />
          </Route>
          <Route path="/">
          <Home />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
