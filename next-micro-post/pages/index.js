import React from 'react'

export default class extends React.Component {
  state = {
    email: '',
    password: '',
    isPosting: false,
  }

  onChangeEmail = e => this.setState({ email: e.target.value })
  onChangePassword = e => this.setState({ password: e.target.value })

  onSubmit = () => {
    this.setState({ isPosting: true })
    setTimeout(() => {
      alert(JSON.stringify(this.state))
      this.setState({ isPosting: false })
    }, 2000)
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
        <input
          type="text"
          value={this.state.email}
          onChange={this.onChangeEmail}
        />
        <div>Password</div>
        <input
          type="password"
          value={this.state.password}
          onChange={this.onChangePassword}
        />
        <button onClick={this.onSubmit}>submit</button>
        <div>{this.state.isPosting ? 'isPosting...' : ''}</div>
      </div>
    )
  }
}
