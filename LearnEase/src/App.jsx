import React from 'react';
import Navbar from './Navbar';
import LandingPage from './LandingPage';
import Slideshow from './Slideshow'; 
import './css/style.css';

function App() {
  const documents = [  ];
  
  return (
    <div className="App">
      <Navbar />
     
      <LandingPage />
      <Slideshow documents={documents} />
    </div>
  );
}

export default App;
