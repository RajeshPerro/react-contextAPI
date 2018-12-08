import React from "react";
import PropTypes from "prop-types";
import Player from "component/Player";
import TeamContext from "context/TeamContext";

const Team = props => (
  <div className="container">
    <TeamContext.Consumer>
      {({ players }) => {
        return players.map((player, index) => (
          <Player player={player} key={index} />
        ));
      }}
    </TeamContext.Consumer>
  </div>
);
Team.propTypes = {
  players: PropTypes.array.isRequired,
  addPlayer: PropTypes.func
};
export default Team;
