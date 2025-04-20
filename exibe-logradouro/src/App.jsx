import React from 'react'
import Busca from './Componentes/Busca'
import LocalidadeLista from './Componentes/LocalidadeLista'

class App extends React.Component {

  onBuscaRealizada = (cep) => {
    alert(cep)
  }
  render(){
    return (
      <div className='grid justify-content-center'>
        <div className='col-6 grid justify-content-center'>
          <div className="col-12">
            <Busca dica="Digite um CEP"
            onBuscaRealizada={this.onBuscaRealizada} />
          </div>
          <div className="col-12">
            <LocalidadeLista />
          </div>
        </div>
      </div>
    )
  }
}

export default App