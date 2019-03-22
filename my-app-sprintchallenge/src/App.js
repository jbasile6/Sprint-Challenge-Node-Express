import React, { Component } from 'react';
import { Route } from 'react-router-dom';

//import logo from './logo.svg';
import './App.css';

import Header from './components/Header';
import Projects from './components/Projects';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path="/" component={Header} />
        <Route exact path="/projects" component={Projects} />
        {/* <Route path="/actions" component={Actions} />  */}
      </div>
    );
  }
}

export default App;
