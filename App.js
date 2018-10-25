import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import me from "./me.jpg";
import me2 from "./me2.jpg";

class App extends Component {
  render() {
    return (
      <div className="att1">
        <header className="att1-header">
        <img src={me}/>
        </header>

        <div className="att2">
          <p>
           paragraphe 2
          </p>
        </div>

        <br/><hr/><br/>

        <div className="att3">
          <p>
           paragraphe 1
          </p>
         </div>

      </div>
    );
  }
}

export default App;
