import React from 'react'
import Busca from '../Busca/Busca'
import Carrinho from '../Carrinho/Carrinho'
import { HeaderContainer } from './headerStyled'
import star from '../../assets/star.png'

const Header = ({texto, setTexto, busca, setBusca, itens, carrinho, setCarrinho, setItens}) => {
    

  return (
    <HeaderContainer>
      <img className='logo' src={star}/>
      <Busca texto={texto} setTexto={setTexto} busca={busca} setBusca={setBusca}/>
      <Carrinho itens={itens} carrinho={carrinho} setCarrinho={setCarrinho} setItens={setItens}/>
    </HeaderContainer>
  )
}

export default Header
