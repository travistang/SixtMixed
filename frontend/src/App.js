import React from 'react';
import NavBar from './components/NavBar';
import OfferList from './components/OfferList';
import NextEvent from './components/NextEvent';
import './App.css';

const events = [0,1];

function App() {
  return (
    <div className="App">
      <div className="App-MainContainer">
        <NextEvent/>
        <OfferList events={events} />
      </div>
      <NavBar />
    </div>
  );

}

export default App;
