import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact'

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Projects />
      <About />
      <Contact />
    </div>
  );
}

export default App;
