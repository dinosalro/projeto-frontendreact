import styled from "styled-components";

export const BuscaContainer = styled.div`
 
 input{
background-color: #e0b8ff;
border: #a330fc;
width: 30vw;
padding: 6px;
border-radius: 10px;
::placeholder{
    color: #a330fc;
}
 }

 button{

    border: none;
    background-color: transparent;
    position: relative;
    left: -30px;
    top: 5px;
    img{
        height: 20px;
    
    }
    
    :hover{
        transition: scale .2s linear;
        transform: scale(1.1); 
    }
 }


`