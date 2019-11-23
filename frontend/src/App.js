import React from 'react';
import NavBar from './components/NavBar';
import OfferList from './components/OfferList';
import NextEvent from './components/NextEvent';
import { events, offers } from './data';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="App-MainContainer">
        <NextEvent event={events[0]} />
        <OfferList event={events[0]} offers={offers[0]} />
      </div>
      <NavBar />
    </div>
  );

}

export default App;
