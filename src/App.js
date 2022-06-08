import './App.css';

//import { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import NavBar from './Components/Nav/NavBar';
import Events from './Pages/Events';
import FAQs from './Pages/FAQs';
import Home from './Pages/Home';
import Registry from './Pages/Registry';
import RSVP from './Pages/RSVP';
import WeddingDetails from './Pages/WeddingDetails';

function App() {
  return (
    <Router>
    <div>
      <Header />
      <NavBar />
      <div>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/rsvp'>
            <RSVP />
          </Route>
          <Route exact path='/events'>
            <Events />
          </Route>
          <Route exact path='/registry'>
            <Registry />
          </Route>
          <Route exact path='/weddingdetails'>
            <WeddingDetails />
          </Route>
          <Route exact path='/faqs'>
            <FAQs />
          </Route>
        </Switch>
      </div>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
