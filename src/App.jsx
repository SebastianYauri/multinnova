import { useState } from 'react';
import './App.css';
import './index.css';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <div className="main-content">
        <Carousel />
        {/* Tu contenido principal aquí */}
      </div>
    </>
  );
}

export default App;
