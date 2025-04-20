import React from 'react'
import ItemLista from './ItemLista';

const LocalidadeLista = () => {
  return (
    <div>
      <ItemLista
        cep="040094-050"
        logradouro="Avenida Pedro Álvares Cabral"
        bairro="Parque Ibirapuera"
        localidadeUF="São Paulo - SP" />
      <ItemLista
        cep="55592-970"
        logradouro="Rua dos Navegantes"
        bairro="Vila de Porto de Galinhas"
        localidadeUF="Ipojuca - PE" />
    </div>
  )
}

export default LocalidadeLista