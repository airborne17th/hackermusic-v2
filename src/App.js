import React from 'react';
import Header from './view/header';
import Footer from './view/footer';
import Player from './components/Player';

import './App.css';

function App() {
  return (
    <div className="app-main">
    <Header />
    <Player />
    <Footer />
    </div>
  );
}

export default App;
