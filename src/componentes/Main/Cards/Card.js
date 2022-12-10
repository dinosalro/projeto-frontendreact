import React from 'react'
import { Cards, CardsContainer } from './cardStyled'
import config from '../../config.json'

const Card = (props) => {

    function addCarrinho(estrela){
    props.setItens(props.itens + 1)
    const novoCarrinho = [...props.carrinho]

    const encontrarItem = novoCarrinho.find((produto) => {
       return produto.id === estrela.id
    })
    if(!encontrarItem){
        const novoProduto = {...estrela, quantidade: 1}
        novoCarrinho.push(novoProduto)
    }else{
        
        encontrarItem.quantidade++
    }

    props.setCarrinho(novoCarrinho)

    console.log(novoCarrinho)

    }


  return (
   <CardsContainer>
        {config.estrelas.filter((estrela) =>
         { return estrela.nome.toUpperCase().includes(props.busca.toUpperCase())})
         .filter((estrela) =>{
        return (estrela.valor >= props.precos.min && estrela.valor <= props.precos.max)
         }).filter((estrela) => { 
                if((!props.linhas[0].bool && !props.linhas[1].bool && !props.linhas[2].bool) || (props.linhas[0].bool && props.linhas[1].bool && props.linhas[2].bool) ){
                    return estrela.linha}
                if(props.linhas[0].bool && props.linhas[1].bool){
                    return (estrela.linha === props.linhas[0].nome) || (estrela.linha ===props.linhas[1].nome)
                } if(props.linhas[0].bool && props.linhas[2].bool){
                    return (estrela.linha === props.linhas[0].nome) || (estrela.linha ===props.linhas[2].nome)
                } if(props.linhas[1].bool && props.linhas[2].bool){
                    return (estrela.linha === props.linhas[1].nome) || (estrela.linha ===props.linhas[2].nome)
                } if(props.linhas[0].bool){
                    return estrela.linha === props.linhas[0].nome
                }  if(props.linhas[1].bool){
                    return estrela.linha === props.linhas[1].nome
                } if(props.linhas[2].bool){
                    return estrela.linha === props.linhas[2].nome
                }          
            }).sort((a, b) => {
                if (props.ordenar === "alfa") {
                  if (a.nome < b.nome) {
                    return -1;
                  } else {
                    return 1;
                  }
                }}).map((estrela) => {
                
        return(
            <Cards key={estrela.id}>
            <div>
        <img src={estrela.img}/>
        <p className='nomeEstrela'>{estrela.nome}</p>
        <p className='linha' style={{ backgroundColor: `${estrela.linha === "Premium" ? "#ea7ffa" : estrela.linha === "Bagaceira" ? "#30d7fc": "#ff9cf2"}`}} >{estrela.linha}</p>
        </div>
        <div>
        <h2>R$ {estrela.valor}</h2>
        <button onClick={() => {addCarrinho(estrela)}}>+</button>
    </div>
    </Cards>
        )
    })}
    </CardsContainer>
    
  )
}

export default Card
