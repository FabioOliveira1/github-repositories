import { Component } from 'react'

class Form extends Component {
  constructor (props) {
    super(props)
    this.state = {
      username: 'fabiooliveira1'
    }
    this.changeUsername = this.changeUsername.bind(this)
  }
  changeUsername (e) {
    this.setState({ username: e.target.value })
  }
  render () {
    return (
      <section className="form">
        <form onSubmit={(e) => this.props.searchUser(e, this.state.username)}>
          <input
            type="text"
            placeholder="Usuário no Github"
            value={this.state.username}
            onChange={this.changeUsername}
          />
          <button type="submit">Buscar</button>
        </form>
      </section>
    );
  }
}

export default Form;
