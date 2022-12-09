import styled from "styled-components";

export const FiltroContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;


width: 200px;
height: 360px;
padding: 20px;
border-radius: 10px;
background-color: #d4e4ff;
box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

h1{
    font-size: medium;
    color: #a330fc;
}

p{
    color: #a330fc;
    font-size: small;
    font-weight: medium;
    margin-top: 10px;

}

.checkContainer{
    display: flex;
    flex-direction: column;
}

.checkbox{
    display: flex;
    align-items: center;
    margin-top: 4px;
    
    
    
    .linha1{
        background-color: #ea7ffa;      
        
    }
    .linha2{
        background-color: #30d7fc;
        
    }
    .linha3{
        background-color: #ff9cf2;
        
    }
    label{
        border-radius: 4px;
        margin-left: 4px;
        padding: 2px 8px;
        color: white;
        font-size: x-small;
    }
}


.select{
background-color: #fbf0ff;
width: 150px;
border: none;
border-radius: 5px;
padding:4px 10px;
margin: 4px 0;
color: #a330fc;

}

input[type=number]{
    background-color: #fbf0ff;
width: 150px;
border: none;
border-radius: 5px;
padding:4px 10px;
margin: 4px 0;
color:#a330fc ; 

::placeholder{
    color: #a330fc;
}
} 

.botaoFiltros{
    border: none;
    background-color: #a330fc;
    color: white;
    padding:4px 10px;
    border-radius: 5px;
    margin-top: 10px;

    :hover{
        background-color: #30d7fc;
    }
}

.botaoRemover{
    border: none;
    background-color: #ff9cf2;
    color: white;
    padding: 4px;
    border-radius: 5px;
    margin-top: 4px;

    :hover{
        background-color: red;
    }
}


`