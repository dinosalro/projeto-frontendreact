import React from "react";
import { CarrinhoContainer } from "./carrinhoStyled";
import carrinho from "../../assets/carrinho.png";

const Carrinho = (props) => {
  const [modal, setModal] = React.useState(false);
  const [compra, setCompra] = React.useState(false);

  const total = props.carrinho.reduce((acc, item) => {
    return item.valor * item.quantidade + acc;
  }, 0);

  function compraFinalizada() {
    setCompra(true);
    props.setCarrinho([]);
    props.setItens(0);
  }

  function addQuantidade(item) {
    const novoCarrinho = [...props.carrinho];

    const encontrarItem = novoCarrinho.find((produto) => {
      return produto.id === item.id;
    });

    encontrarItem.quantidade++;
    props.setItens(props.itens + 1);

    props.setCarrinho(novoCarrinho);
  }

  function diminuirQuantidade(item) {
    const novoCarrinho = [...props.carrinho];

    const encontrarItem = novoCarrinho.find((produto) => {
      return produto.id === item.id;
    });

    encontrarItem.quantidade--;
    props.setItens(props.itens - 1);
    props.setCarrinho(novoCarrinho);
  }

  function removerItem(item) {
    const novoCarrinho = [...props.carrinho];

    const remover = novoCarrinho.filter((produto) => {
      return produto.id !== item.id;
    });

    props.setCarrinho(remover);
    props.setItens(props.itens - item.quantidade);
  }

  return (
    <CarrinhoContainer>
      <span
        className="quantidade"
        style={{
          backgroundColor: `${props.itens > 0 ? "orange" : "transparent"}`,
        }}
      >
        {" "}
        {props.itens > 0 && props.itens}
      </span>
      <button
        className="botaoCarrinho"
        onClick={() => {
          return setModal(true), setCompra(false);
        }}
      >
        <img src={carrinho} />
      </button>
      {modal && props.carrinho.length > 0 ? (
        <div className="modal">
          <div className="container">
            <h3 className="titulo">Seu Carrinho</h3>
            <button
              className="close"
              onClick={() => {
                return setModal(false), setCompra(false);
              }}
            >
              X
            </button>
            <div className="carrinho">
              <div className="scroll">
                {props.carrinho.map((item) => {
                  return (
                    <div className="quandoTemItemNoCarrinho">
                      <div className="itemFotoETexto">
                        <div key={item.id}>
                          <img className="foto" src={item.img} />
                        </div>
                        <div className="itemTexto">
                          <p>{item.nome}</p>
                          <h2>R$ {item.valor * item.quantidade}</h2>
                          <p>
                            {item.quantidade} unidade(s) de {item.valor} reais{" "}
                          </p>
                        </div>
                      </div>
                      <div className="itemBotoes">
                        <div className="maismenos">
                          {item.quantidade > 1 ? (
                            <button
                              className="diminuir"
                              onClick={() => {
                                diminuirQuantidade(item);
                              }}
                            >{`< `}</button>
                          ) : (
                            <button
                              style={{ color: "red", marginRight: "6px" }}
                            >{`< `}</button>
                          )}
                          {item.quantidade}
                          <button
                            className="aumentar"
                            onClick={() => {
                              addQuantidade(item);
                            }}
                          >{` >`}</button>
                        </div>
                        <div>
                          <button
                            onClick={() => {
                              removerItem(item);
                            }}
                          >
                            Remover
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="valorTotal">
                <p> Total: R$ {total} </p>
                <button onClick={() => compraFinalizada()}>
                  Finalizar Compra
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : modal && compra ? (
        <div className="modal">
          <div className="container">
            <button
              className="close"
              onClick={() => {
                setModal(false);
              }}
            >
              X
            </button>
            <div className="compraFinalizada">
              <h2> Parabéns!</h2>
              <p> Sua compra foi finalizada</p>
              <p>✨ Seu pedido chegará em breve ✨</p>
            </div>
          </div>
        </div>
      ) : (
        modal && (
          <div className="modal">
            <div className="container">
              <div className="semItens">
                <button
                  className="close"
                  onClick={() => {
                    setModal(false);
                  }}
                >
                  X
                </button>
                <p> {`Não tem itens no seu carrinho :(`}</p>
                <p> ... </p>
              </div>
            </div>
          </div>
        )
      )}
    </CarrinhoContainer>
  );
};

export default Carrinho;
