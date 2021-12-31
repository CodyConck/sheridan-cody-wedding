import React from 'react';
import './App.css';
import Header from './Components/Header/Header';

class App extends React.Component {
  render () {

    return (
      <div>
        <Header/>
          <div className='nameDate'>
            <h1>Sheridan & Cody</h1>
            <p>Date TBD</p>
          </div>
        
        <img src="/images/IMG_0523.JPG" alt=""/>
      </div>
    )
  }
}

export default App;
