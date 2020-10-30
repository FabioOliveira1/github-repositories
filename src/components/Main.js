import { Component } from 'react'
import { getUserPublicRepositories } from '../api'
import Form from './Form'
import List from './List'

class App extends Component {
  constructor () {
    super()
    this.state = {
      repositories: []
    }
    this.searchUser = this.searchUser.bind(this)
  }
  searchUser (e, username) {
    e.preventDefault()
    if (!username) {
      this.setState({ repositories: [] })
    } else {
      getUserPublicRepositories(username)
        .then(({ data }) => {
          this.setState({ repositories: data })
        })
        .catch(e => { console.log(e) })
    }
  }
  render () {
    return (
      <div className="container">
        <header className="header">
          Github repositories
        </header>
        <main className="main">
          <Form searchUser={this.searchUser} />
          <List repositories={this.state.repositories}/>
        </main>
      </div>
    );
  }
}

export default App;
