import React from 'react';
import NavBar from './components/NavBar';
import OfferList from './components/OfferList';
import NextEvent from './components/NextEvent';
import { events, offers } from './data';
import { getUrlParameter } from './utils';
import ConfirmModal from './components/ConfirmModal';
import './App.css';

function App() {
  const userId = parseInt(getUrlParameter('user')) || 0;
  const [orderContent, setOrderContent] = React.useState(null);
  return (
    <div className="App">
      <ConfirmModal 
        offer={orderContent} 
        setOrderContent={setOrderContent} 
      />
      <div className="App-MainContainer">
        <NextEvent event={events[userId]} />
        <OfferList 
          onOrder={setOrderContent}
          event={events[userId]} offers={offers[userId]} 
        />
      </div>
      <NavBar />
    </div>
  );

}

export default App;
