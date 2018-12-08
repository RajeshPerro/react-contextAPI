import React from "react";
const Player = ({ player }) => (
  <div className="row">
    <div className="col s6 m6 offset-m3">
      <div className="card blue lighten-2">
        <span className="card-title">{player.name}</span>
        <ul>
          <li>Age : {player.age}</li>
          <li>Position : {player.position}</li>
        </ul>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto,
          cumque itaque! Optio dolore quae nesciunt velit dignissimos facilis
          placeat debitis inventore quis mollitia soluta, accusantium sapiente
          odit perferendis at ratione.
        </p>
      </div>
    </div>
  </div>
);

export default Player;
