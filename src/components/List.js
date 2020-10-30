import { Component } from 'react'

class List extends Component {
  constructor () {
    super()
    this.giveStar = this.giveStar.bind(this)
  }
  giveStar (repoPath) {
    console.log(repoPath)
  }
  formatDate (date) {
    date = new Date(date).toISOString()
    date = date.split('T')
    date = date[0].split('-').reverse().join('/')
    return date
  }
  render () {
    if (this.props.repositories.length) {
      const items = this.props.repositories.map(r => (
        <div className="list__item" key={r.id}>
          <div className="list__item__title">
            <b>{r.name}</b>
          </div>
          <div className="list__item__data">
            <p>Nome: <b>{r.name}</b></p>
            <p>Descrição: <b>{r.description || '--'}</b></p>
            <p>Criado em: <b>{this.formatDate(r.created_at)}</b></p>
            {/* <button onClick={() => this.giveStar(r.full_name)}>Give star</button> */}
          </div>
        </div>
      ))

      return (<section className="list">{items}</section>)
    }

    return (<section className="list"><span>Nenhum repositório encontrado</span></section>)
  }
}

export default List;
