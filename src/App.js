import React, { Component } from "react";

import Team from "component/Team";
import TeamContext from "context/TeamContext";

import "./App.css";

class App extends Component {
  state = {
    players: [
      { id: 1, name: "Rajesh", age: 28, position: "Forwarder" },
      { id: 2, name: "Pasha", age: 29, position: "Back" },
      { id: 3, name: "Linkon", age: 28, position: "Forwarder" }
    ]
  };
  addPlayer = (name = "Test",age=2, position="iccha") =>
    
    this.setState({
      players: [
        ...this.state.players,
        { name, id: this.state.players.length + 1, age, position }
      ]
    });
  render() {
    return (
      <div className="App">
        <h2>Context API Example</h2>
        <TeamContext.Provider
          value={{ players: this.state.players, addPlayer: this.addPlayer }}
        >
          <Team />
        </TeamContext.Provider>
      </div>
    );
  }
}

export default App;
