import React from 'react'
import { FiltroContainer } from './filtrosStyled'

const Filtros = (props) => {
  const [min, setMin] = React.useState(-Infinity)
  const [max, setMax] = React.useState(Infinity)
  const [premium, setPremium] = React.useState(false)
  const [bagaceira, setBagaceira] = React.useState(false)
  const [junina, setJunina] = React.useState(false)


 

  function addFiltros(){
    props.setPrecos({min: min, max: max})
    console.log(props.precos) 
    props.setLinhas([{bool: premium, nome: 'Premium'}, {bool: bagaceira, nome: 'Bagaceira'}, {bool: junina, nome: 'Junina'}])
    console.log(props.linhas);
    }

  function removerFiltros(){
    props.setPrecos({min: -Infinity, max: Infinity })
    props.setLinhas([{bool: false, nome: 'Premium'}, {bool: false, nome: 'Bagaceira'}, {bool: false, nome: 'Junina'}])
    props.setOrdenar("-")
    setMax("")
    setMin("")
    setBagaceira(false)
    setJunina(false)
    setPremium(false)
    props.ordenar("-")
    }


  return (
    <FiltroContainer>
      <h1>FILTROS</h1>
    
      <div className='checkContainer'>
        <p>LINHA</p>
        <div className='checkbox'><input checked={premium} onChange={(e) => {setPremium(e.target.checked)}}  value='Premium' type='checkbox' id='pre'/> <label className="linha1" htmlFor='pre' >PREMIUM</label></div> 
        <div className='checkbox'><input checked={junina} onChange={(e) => {setBagaceira(e.target.checked)}}  value="Bagaceira" type='checkbox' id='peb'/> <label className="linha2" htmlFor='peb' >BAGACEIRA</label></div>
        <div className='checkbox'><input checked={bagaceira} onChange={(e) => {setJunina(e.target.checked)}}  value="Junina" type='checkbox' id='jun'/> <label className="linha3" htmlFor='jun' >JUNINA</label></div>
      </div>
      <div>
        <p>ORDENAR</p>
        <select className='select' value={props.ordenar} onChange={(e) => {props.setOrdenar(e.target.value)}}>
          <option value="-">-</option>
          <option value="alfa">Ordem Alfabetica</option>
        </select>
      </div>
      <div>
        <p>VALOR</p>
      <input value={min} placeholder='Min' type='number' onChange={(e) =>{setMin(Number(e.target.value))}} />
      <input value={max} placeholder='Max' type='number' onChange={(e) =>{setMax(Number(e.target.value))}}/>
      </div>
      <button className='botaoFiltros' onClick={addFiltros}>Filtrar</button>
      <button className='botaoRemover' onClick={removerFiltros}>Remover</button>
   
    </FiltroContainer>
  )
}

export default Filtros
