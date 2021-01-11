import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Hero from '../components/Hero';
import About from '../components/About';
import { aboutObj } from '../components/About/AboutData';
import Toolbox from '../components/Toolbox'
import { toolboxObj } from '../components/Toolbox/ToolboxData';
import Projects from '../components/Projects';
import Connect from '../components/Connect';
import Footer from '../components/Footer';

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
      <Toolbox {...toolboxObj} />
      <Projects />
      <Connect />
      <Footer />
    </>
  );
}

export default Home;

