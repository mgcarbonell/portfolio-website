import React from 'react';
import Skills from './skills/Skills'
import TechnicalInterests from './skills/TechnicalInterests'
import NonTechInterests from './skills/NonTechInterests'

const About = () => {
  return (
    <div>
      About Me
      <Skills />
      <TechnicalInterests />
      <NonTechInterests />
    </div>
  );
}

export default About;

// A little bit about me, a little bit about the page
// I wonder if I can do a thing like hashicorp does on their page where I can then have a side-nav bar with smooth scroll to my interests
// and break it up to "Skills," "Technical Interests," "Non-Technical Interests"
// Link to a resume