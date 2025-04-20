import React from 'react'
import ItemLista from './ItemLista';

const LocalidadeLista = (props) => {
  return (
    props.dds.map((cep, i) => (
      <ItemLista
        key={i} 
        cep={cep.cep} 
        logradouro={cep.logradouro} 
        bairro={cep.bairro} 
        localidadeUF={`${cep.estado} - ${cep.uf}`} />
    ))
  )
}

export default LocalidadeLista