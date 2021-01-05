import React, { Component } from 'react';
import Fade from 'react-reveal/Fade'

class Boiler extends Component {
  render() {
    return (
      <div>
        <header className="App-header">
          <div>
            <Fade left>
              <h1>
                Hi! It's me, Mario Carbonell
              </h1>  
            </Fade>
          </div>
          <div>
            <Fade right>
              <p>We're under construction right now</p>
            </Fade>
          </div>
          <div>
          <Fade bottom>
            <a href="https://github.com/mgcarbonell">But checkout my beautiful Github in the meanwhile!</a>
          </Fade>
          </div>
        </header>
      </div>
    );
  }
}

export default Boiler;
