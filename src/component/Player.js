import React from 'react'
import { MyContext } from './context'
const  Player = ()=> {
  
  return (
    <div className="container">
          <MyContext.Consumer>
              {(context) => 
                  
                {
                  const {players} =context
                  console.log(players)
                
                  return(
                      players.map(player=>{
                          return(
                              <React.Fragment key={player.id}>
                                  <div className="row" >
                                      <div className="col s6 m6 offset-m3">
                                          <div className="card blue lighten-2">
                                              <span className="card-title">{player.name}</span>
                                                <ul>
                                                    <li>Age : {player.age}</li>
                                                    <li>Position : {player.position}</li>
                                                </ul>
                                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, cumque itaque! Optio dolore quae nesciunt velit dignissimos facilis placeat debitis inventore quis mollitia soluta, accusantium sapiente odit perferendis at ratione.</p>
                                          </div>
                                      </div>
                                  </div>
                              </React.Fragment>
                          )
                      })
                     
                  )
                }    
              }
          </MyContext.Consumer>
    </div>
  )
}

export default Player


