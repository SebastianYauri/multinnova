import React, { useState } from 'react';
import './App.css';
import './index.css';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel/Carousel';
import Footer from './components/Footer';
import Phrase from './components/Phrase/Phrase'; // Importa el nuevo componente


function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Navbar />
      <div className="main-content">
        <Carousel />
        <Phrase />
        {/* Tu contenido principal aquí */}
      </div>
      <Footer />
    </div>
  );
}

export default App;
