import React from 'react'
import { BuscaContainer } from './buscaStyled'
import lupa from '../../assets/lupa.png'

const Busca = (props) => {
    const [texto, setTexto] = React.useState("")
    function busca(){
        props.setBusca(texto)
      
    }
  return (
    <BuscaContainer>
      <input onChange={(e) =>{setTexto(e.target.value)}} onKeyUp={(e) => {if(e.key === "Enter"){ busca()}}} placeholder='Busca'/>
      <button onClick={busca}><img src={lupa}/></button>
    </BuscaContainer>
  )
}

export default Busca
