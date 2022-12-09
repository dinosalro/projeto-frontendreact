import React from "react";
import { AppContainer } from "./appStyled";
import Footer from "./componentes/Footer/Footer";
import Header from "./componentes/Header/HeaderMain/Header";
import Main from "./componentes/Main/Main/Main";
import GlobalStyled from "./GlobalStyled";

function App() {
  const [busca, setBusca] = React.useState("")
  const [itens, setItens] = React.useState(0)
  const [carrinho, setCarrinho] = React.useState([])

  return (
    <AppContainer>
      <GlobalStyled/>
    
      <Header 
      busca={busca} 
      setBusca={setBusca} 
      itens={itens}
      setItens={setItens} 
      carrinho={carrinho}
      setCarrinho={setCarrinho}/>
      <div className="main">
      <Main
      busca={busca} 
      itens={itens} 
      setItens={setItens}
      carrinho={carrinho}
      setCarrinho={setCarrinho}
      />
      </div>
      <Footer/>
    
    </AppContainer>
  );
}

export default App;
