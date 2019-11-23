import React from 'react';
import NavBar from './components/NavBar';
import OfferList from './components/OfferList';
import './App.css';

const events = [0,1];

function App() {
  return (
    <div className="App">
      <div className="App-MainContainer">
        <div style={{flex: 1}} />
        <OfferList events={events} />
      </div>
      <NavBar />
    </div>
  );

}

export default App;
