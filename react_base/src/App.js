import React from 'react'
import UserName from './username'

class App extends React.Component {
  state = {
    name: '',
  }

  onChangeText = e => {
    this.setState({ name: e.target.value })
  }

  render() {
    return (
      <div>
        <UserName name={this.state.name} />
        <input type="text" onChange={this.onChangeText} />
      </div>
    )
  }
}

// export const UserName = props => <h1>{props.name}</h1>
export default App;
