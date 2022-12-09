import React from 'react'
import Busca from '../Busca/Busca'
import Carrinho from '../Carrinho/Carrinho'
import { HeaderContainer } from './headerStyled'
import star from '../../assets/star.png'

const Header = (props) => {
    const busca = props.busca
    const setBusca = props.setBusca
    const itens = props.itens
    const carrinho = props.carrinho
    const setCarrinho = props.setCarrinho
    const setItens = props.setItens

  return (
    <HeaderContainer>
      <img className='logo' src={star}/>
      <Busca busca={busca} setBusca={setBusca}/>
      <Carrinho itens={itens} carrinho={carrinho} setCarrinho={setCarrinho} setItens={setItens}/>
    </HeaderContainer>
  )
}

export default Header
