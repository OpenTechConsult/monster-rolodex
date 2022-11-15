import { Component } from 'react'

import logo from './logo.svg'
import './App.css'

class App extends Component {

  constructor() {
    super()
    this.state = {
      name: { firstName: 'Sandro', lastName: 'Agboka' },
      company: 'ZTM'
    }
  }

  render() {
    return (
      <div className="App" >
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hi my name is {this.state.name.firstName} {this.state.name.lastName},
            and I work at {this.state.company}
          </p>
          <button onClick={() => {
            this.setState({ name: { firstName: 'Ronnie', lastName: 'Bamico' } })
            console.log(this.state)
          }}>
            Change name
          </button>
        </header>
      </div>
    )
  }
}

export default App
