import React from 'react';
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div>
      <h1>Hi! It's me,</h1> 
      <p>I'm Mario!</p>
      <Link to="contact" smooth={true} duration={1000}>Contact Me!</Link>
    </div>
  );
}

export default Home;

// Stuff like Hi! I'm Mario Carbonell, something about Engineering and I'm a software dev