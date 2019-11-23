import React from 'react';
import NavBar from './components/NavBar';
import EventOverview from './components/EventOverview';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="App-MainContainer">
        <div style={{flex: 1}} />
        <EventOverview />
      </div>
      <NavBar />
    </div>
  );

}

export default App;
