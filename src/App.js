import { Component } from 'react'

import logo from './logo.svg'
import './App.css'

class App extends Component {

  constructor() {
    super()
    this.state = {
      monsters: [],
    }
    console.log('constructor')
  }

  componentDidMount() {
    console.log('componentDidMount')
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState(() => {
        return { monsters: users }
      },
        () => {
          console.log(this.state)
        }
      ))
  }

  render() {
    console.log('render')
    return (
      <div className="App" >
        <input type="search"
          className="search-box"
          placeholder="search monsters"
          onChange={(event) => {
            const searchString = event.target.value.toLowerCase()
            const filteredMonsters = this.state.monsters.filter((monster) => {
              return monster.name.toLowerCase().includes(searchString)
            })

            this.setState(() => {
              return { monsters: filteredMonsters }
            })
          }} />

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
