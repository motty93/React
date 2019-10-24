import React from 'react'
import { UserName } from './Username'
import { initialState } from './Context'

interface Props {}

class App extends React.Component<Props, initialState> {
  state: initialState = {
    name: ''
  }

  onChangeText = (e: any) => {
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

export default App;
