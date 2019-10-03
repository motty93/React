import React from 'react'

export default class extends React.Component {
  state = {
    email: '',
    password: ''
  }

  onChangeEmail = e => this.setState({ email: e.target.value })
  onChangePassword = e => this.setState({ password: e.target.value })

  onSubmit = () => {
    alert(JSON.stringify(this.state))
  }

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
