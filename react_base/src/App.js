import React from 'react';

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
        <h1>{this.state.name}</h1>
        <input type="text" onChange={this.onChangeText} />
      </div>
    )
  }
}

export default App;
