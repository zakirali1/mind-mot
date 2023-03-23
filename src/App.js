import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Relax from './pages/Relax';
import Eat from './pages/Eat';
import Move from './pages/Move';
import Sleep from './pages/Sleep';
import Home from './pages/Home';
import About from './pages/About';
import Navbar from './components/Navbar';
import Wrapper from './components/Wrapper';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/relax" element={<Relax/>} />
            <Route path="/eat" element={<Eat/>} />
            <Route path="/move" element={<Move/>} />
            <Route path="/sleep" element={<Sleep/>} />
          </Routes>
        </Wrapper>
      </div>
    </Router>
  );
}

export default App;
