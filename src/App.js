import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Nav from './Components/Nav/Nav';

class App extends React.Component {
  render () {

    return (
      <div>
        <Header/>
        <Nav/>
        
        <img src="/images/IMG_0523.JPG" alt=""/>
        <Footer/>
      </div>
    )
  }
}

export default App;
