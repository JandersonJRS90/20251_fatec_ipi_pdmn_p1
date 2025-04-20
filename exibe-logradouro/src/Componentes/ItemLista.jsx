import React from 'react'
import { Card } from 'primereact/card';

const ItemLista = (props) => {
  return (
    <Card className="m-2 text-center border-solid border-round-3xl">
      <p className="m-1">{props.cep}</p>
      <p className="m-1">{props.logradouro}</p>
      <p className="m-1">{props.bairro}</p>
      <p className="m-1">{props.localidadeUF}</p>
    </Card>
  )
}

export default ItemLista