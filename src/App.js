import React, { Component } from 'react';
import './App.css';
import Team from './component/Team'
import MyProvider from './provider/MyProvider'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>Context API Example</h2>
        <MyProvider>
          <Team />
        </MyProvider>
          
      </div>
    );
  }
}

export default App;
