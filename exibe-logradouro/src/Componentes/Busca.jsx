import React, { Component } from 'react'
import { Button } from 'primereact/button'
import { IconField } from 'primereact/iconfield'
import { InputIcon } from 'primereact/inputicon'
import { InputText } from 'primereact/inputtext'

export default class Busca extends Component {
  state = {
    cepDeBusca: ''
  }
  onCepAlterado = (event) => {
    this.setState({cepDeBusca: event.target.value})
  }

  onFormSubmit = (event) => {
    event.preventDefault()
    alert(this.state.cepDeBusca)
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <div className='flex flex-column m-2 p-2 mt-4'>
            <IconField iconPosition="left">
            <InputIcon className="pi pi-search"> </InputIcon>
            <InputText
                className="w-full"
                placeholder={this.props.dica}
                onChange={this.onCepAlterado}
                value={this.state.cepDeBusca} />
            </IconField>
            <Button className="mt-2" label="OK" severity="submit" outlined />
        </div>
      </form>
    )
  }
}
