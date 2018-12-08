import React, { Component } from 'react'
import {MyContext} from '../component/context'

class MyProvider extends Component {
    state = {
        players:[
            {id: 1,name :'Rajesh', age :28, position:'Forwarder'},
            { id: 2, name: 'Pasha', age: 29, position: 'Back' },
            { id: 3, name: 'Linkon', age: 28, position: 'Forwarder' }
        ]
    }
  render() {
      const { children } = this.props;
    return (
      <MyContext.Provider value={this.state}>
        {
        children
        }
      </MyContext.Provider>
    )
  }
}

export default MyProvider
