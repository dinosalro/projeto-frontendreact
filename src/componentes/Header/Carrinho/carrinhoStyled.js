import styled from "styled-components";

export const CarrinhoContainer =  styled.div`
display: flex;

.quantidade{
    display: flex;
    align-items: center;
    justify-content: center;

    background-color: orange;
    position: relative;
    right: -8px;

    z-index: 10;
    height: 22px;
    width:22px;
    padding: 4px;
    border-radius: 50%;

}

.botaoCarrinho{
    
    display: flex;
    align-items: center;
    padding: 10px;
    border: none;
    border-radius: 50px;
    background-color:  #d4e4ff ;

    img{
        
        height: 20px;
    }
}

.modal{
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,0.5);
    z-index: 10;
    

    .container{
        background-image: linear-gradient(to top left, #d4e4ff, #ca85ff);
        max-height: 400px;
        width: 500px;
        border-radius: 5px;
        padding: 20px;
        position: fixed;
        overflow-y: scroll;

        ::-webkit-scrollbar {
       
        width: 4px;
        
        }
        ::-webkit-scrollbar-track {
        background: linear-gradient(#d4e4ff, #154580);
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
        }
        ::-webkit-scrollbar-thumb {
        background-color: #ca85ff;
        border-radius: 20px;  
        }
        
    }

   .titulo{
    color: #a330fc;
    padding: 10px 0;
    font-weight: 400;
   }

    .close{
        position: absolute;
        top: 4px;
        right: 4px;
        background-color: #a330fc;
        border: none;
        border-radius: 4PX;
        color: white;
        font-weight: bold;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 20px;
        height: 20px;
        
        
    }

    .foto{
        height: 100px;
        width: 100px;
    }
    
.carrinho{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
    .valorTotal{
        display: flex;
        justify-content: space-between;
        align-items: center;

        color: #a330fc;
        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
        border-radius: 8px;
        padding: 20px;
        background-color: whitesmoke;
      

    button{
        border: none;
    background-color: #a330fc;
    color: white;
    padding:4px 10px;
    border-radius: 5px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    

    }
    
    
    
    
}
    
}
.quandoTemItemNoCarrinho{
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    border-radius: 8px;
    margin-bottom: 10px;
    padding: 10px;
    background-color:#d4e4ff;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

    img{
        display: flex;
        align-items: center;

        border-radius: 8px;
    }

    .itemFotoETexto{
        display: flex;
    }

    .itemTexto{
        display: flex;
        flex-direction: column;
        
        margin-left: 10px;
        
        
    }

    .itemBotoes{
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        height: 100px;
        justify-content: space-between;
        
        margin-left: 10px;
        color: #a330fc;

        .maismenos{
            display: flex;
            align-items: center;
            .diminuir{
                margin-right: 6px;
               
    
            }

            .aumentar{
                margin-left: 6px;
            }
            
        }


        button{
           
            background-color: transparent;
            border: none;
            color: #a330fc;
        }
    }



}

.compraFinalizada{
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #a330fc;
    background-color: whitesmoke;
    border-radius: 10px;
    padding: 20px;
    margin:10px 0;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;


    h2{
        font-weight: 400;
        margin: 5px;
    }

    p{
        margin: 5px;
    }
}

.semItens{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 150px;
    color: #a330fc;
    background-color: whitesmoke;
    border-radius: 10px;
    padding: 20px;
    margin:10px 0;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

}
    
}



`