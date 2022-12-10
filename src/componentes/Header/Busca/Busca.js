import React from 'react'
import { BuscaContainer } from './buscaStyled'
import lupa from '../../assets/lupa.png'

const Busca = (props) => {
    
    function busca(){
        props.setBusca(props.texto)
      
    }
  return (
    <BuscaContainer>
      <input value={props.texto} onChange={(e) =>{props.setTexto(e.target.value)}} onKeyUp={(e) => {if(e.key === "Enter"){ busca()}}} placeholder='Busca'/>
      <button onClick={busca}><img src={lupa}/></button>
    </BuscaContainer>
  )
}

export default Busca
