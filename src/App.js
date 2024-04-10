import {Component} from 'react'
import {v4} from 'uuid'
import './App.css'

// Replace your code here
class App extends Component {
  state = {wcList: [], wordy: ''}

  change = event => {
    this.setState({wordy: event.target.value})
  }

  onAlter = event => {
    event.preventDefault()
    const {wordy} = this.state
    const newWord = {
      id: v4(),
      word: wordy,
      count: wordy.length,
    }
    this.setState(prevState => ({
      wcList: [...prevState.wcList, newWord],
      wordy: '',
    }))
  }

  render() {
    const {wcList, wordy} = this.state
    return (
      <div className="main">
        <div className="m1">
          <h1>Count the characters like a Boss...</h1>
          {wcList.length === 0 ? (
            <img
              src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
              alt="no user inputs"
              className="imz"
            />
          ) : (
            <ul className="lst">
              {wcList.map(each => (
                <li key={each.id}>
                  <p>
                    {each.word}:{each.count}
                  </p>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="m2">
          <h1>Character Counter</h1>
          <form onSubmit={this.onAlter}>
            <input
              type="text"
              placeholder="Enter the Characters here"
              value={wordy}
              onChange={this.change}
            />
            <button type="submit">Add</button>
          </form>
        </div>
      </div>
    )
  }
}

export default App
