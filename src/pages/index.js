import React, { useState } from 'react';
import About from '../components/About';
import { aboutObj } from '../components/About/AboutData';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import Projects from '../components/Projects';
import Sidebar from '../components/Sidebar';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <Sidebar isOpen={ isOpen } toggle={ toggle }/>
      <Navbar toggle={ toggle }/>
      <Hero />
      <About {...aboutObj}/>
      <Projects />
    </>
  );
}

export default Home;


// Stuff like Hi! I'm Mario Carbonell, something about Engineering and I'm a software dev