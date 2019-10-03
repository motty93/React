import React from 'react'

// export default () => <h1>Hello World</h1>
export default class extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '80vh'
        }}
      >
        <h1>Sign Up</h1>
        <div>Email</div>
        <input type="text" />
        <div>Password</div>
        <input type="password" />
        <button>submit</button>
      </div>
    )
  }
}
