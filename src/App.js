import { Component } from 'react'

import logo from './logo.svg'
import './App.css'

class App extends Component {

  constructor() {
    super()
    this.state = {
      monsters: [
        {
          name: 'Linda',
          id: '12e13f5'
        },
        {
          name: 'Frank',
          id: '12e13f6'
        },
        {
          name: 'Jacky',
          id: '12e13f7'
        },
        {
          name: 'Sandro',
          id: '12e13f8'
        }
      ]
    }
  }

  render() {
    return (
      <div className="App" >
        {
          this.state.monsters.map((monster) => {
            return (
              <div key={monster.id}>
                <h1>{monster.name}</h1>
              </div>
            )
          })
        }
      </div>
    )
  }
}

export default App
