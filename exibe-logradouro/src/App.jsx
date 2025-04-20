import React from 'react'
import Busca from './Componentes/Busca'
import LocalidadeLista from './Componentes/LocalidadeLista'
import axios from 'axios';

class App extends React.Component {

  onBuscaRealizada = async (cep) => {
    cep = cep.replace(/\D/g, '');
    if(cep != ""){
      const validacep = /^[0-9]{8}$/;
      if(validacep.test(cep)){
        //alert(cep)
        try {
          const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
          console.log(response.data);
        } catch (error) {
          console.error('Erro encontrado:', error);
        }
      }
      else{
        alert("Valor digitado não corresponde a um CEP")
      }
    }
    else{
      alert("Valor digitado não corresponde a um CEP")
    }
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