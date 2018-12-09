import React, {Component} from "react";
import PropTypes from 'prop-types';
import Player from "component/Player";
import TeamContext from "context/TeamContext";

class Team extends Component{

  constructor(props){
    super(props);

    this.state = {
      name: '',
      age: '',
      position: '',

    }
  }

  handelChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  

  render(){
    return(
      <div className="container">
        <TeamContext.Consumer>
          {({ players }) => {
            return players.map((player, index) => (
              <Player player={player} key={index} />
            ));
          }}

        
          
        </TeamContext.Consumer>

        <TeamContext.Consumer>
          {({ addPlayer}) => {
              return(
               
                <form 
                  onSubmit={(event) => 
                    { event.preventDefault(); addPlayer(
                      this.state.name,
                      this.state.age,
                      this.state.position
                    )}} 
                  className="">
                  <hr />
                  <h5 className="grey-text text-darken-3"> Add Player </h5>
                  <div className="input-field">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" value={this.state.name} onChange={this.handelChange} />
                  </div>
                  <div className="input-field">
                    <label htmlFor="age">age</label>
                    <input type="number" id="age" value={this.state.age} onChange={this.handelChange} />
                  </div>
                  <div className="input-field">
                    <label htmlFor="position">Position</label>
                    <input type="text" id="position" value={this.state.position} onChange={this.handelChange} />
                  </div>
                  <div className="input-field">
                    <button className="btn blue lighten-2">Add</button>
                  </div>
                </form>
              );
          }}
        </TeamContext.Consumer>
        
          
        
        
        
       
      </div>
    )
  }
}
Team.propTypes = {
  players: PropTypes.array.isRequired,
  addPlayer: PropTypes.func
};
export default Team;
