import React from "react";

const TeamContext = React.createContext({
  players: [],
  addPlayer: () => {},
  removePlayer: () => {},
  updatePlayer: () => {}
});

export default TeamContext;
