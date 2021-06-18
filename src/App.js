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
import Blog from './Pages/Blogs';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import Team from './Pages/Team';
import Admin from './Components/AdminPanel/Admin';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/service">
          <Service />
          </Route>
          <Route path="/howwork">
          <HowWork />
          </Route>
          <Route path="/aboutus">
          <AboutUs />
          </Route>
          <Route path="/ourteam">
          <Team />
          </Route>
          <Route path="/blog">
          <Blog />
          </Route>
          <Route path="/contact">
          <Contact />
          </Route>
          <Route path="/admin">
          <Admin />
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
