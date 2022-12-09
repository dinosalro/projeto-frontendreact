import github from '../assets/github.png'
import React from 'react'
import { FooterContainer } from './footerStyled'

const Footer = () => {
  return (
    <FooterContainer>
    <a href="https://github.com/dinosalro" target="_blank"> <img src={github}/></a>
    </FooterContainer>
  )
}

export default Footer
