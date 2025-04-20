import React from 'react'
import Busca from './Componentes/Busca'

const App = () => {
  return (
    <div className='grid justify-content-center'>
      <div className="col-6">
        <Busca dica="Digite um CEP" />
      </div>
    </div>
  )
}

export default App