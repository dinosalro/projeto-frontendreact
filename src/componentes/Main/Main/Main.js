import React, { useState } from 'react'
import Card from '../Cards/Card'
import Filtros from '../Filtros/Filtros'
import { MainContainer } from './mainStyled'


const Main = ({ setTexto ,busca, itens, setItens, carrinho, setCarrinho}) => {
    const [linhas, setLinhas] = React.useState([{bool: false, nome: ''}, {bool: false, nome: ''}, {bool: false, nome: ''}])
    const [precos, setPrecos] = React.useState({min: -Infinity, max: Infinity })
    const [ordenar, setOrdenar] = React.useState("");
    

    return (
    <MainContainer>
      <Filtros
      setTexto={setTexto}
      linhas={linhas}
      setLinhas={setLinhas}
      precos={precos}
      setPrecos={setPrecos}
      ordenar={ordenar}
      setOrdenar={setOrdenar}
     />
      <Card
      ordenar={ordenar}
      linhas={linhas}
      precos={precos}
      busca={busca} 
      itens={itens} 
      setItens={setItens} 
      carrinho={carrinho}
      setCarrinho={setCarrinho}/>
    </MainContainer>
  )
}

export default Main
