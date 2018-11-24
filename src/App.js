import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import ScrollUpButton from "react-scroll-up-button";

// components
import Header from './components/headerComponent/header';
import Footer from './components/footerComponent/footer';
import Creations from './components/pages/creations';
import Contact from './components/pages/contact';
import About from './components/pages/about';

// includes
import './Assets/css/styles.css';
import './Assets/css/normalize.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">

          <Header />

          <ScrollUpButton />

          <Route exact path='/' component={Creations} />
          <Route exact path='/Creations' component={Creations} />
          <Route exact path='/About' component={About} />
          <Route exact path='/Contact' component={Contact} />

          <Footer />

        </div>
      </Router>
    );
  }
}

export default App;