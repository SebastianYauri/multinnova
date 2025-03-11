import React, { useState } from 'react';
import './App.css';
import './index.css';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import Footer from './components/Footer';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Navbar />
      <div className="main-content">
        <Carousel />
        {/* Tu contenido principal aquí */}
      </div>
      <Footer />
    </div>
  );
}

export default App;
