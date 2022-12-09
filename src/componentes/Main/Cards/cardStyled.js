import styled from "styled-components";

export const CardsContainer = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-evenly;
`

export const Cards = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;


width: 230px;
height: 312px;
padding: 20px;
margin-left: 20px ;
margin-bottom: 20px ;
background-color : #d4e4ff;
box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
border-radius: 10px;

img{
    height: 200px;
    width: 200px;
    background-size: cover;
    border-radius: 5px;
}

.nomeEstrela{
 font-size: large;
 font-weight: bold ;
 color: #a330fc;
 margin-bottom: 4px;
}

.linha{
    border-radius: 5px;
    padding:2px 8px;
    display: inline-block;
}

div:last-child{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 4px;
    width: 100%;

    button{
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 10px;
        border: none;
        padding: 10px;
        width: 30px;
        height: 30px;
        font-weight: bold;
        color: #a330fc;
        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

        :hover{
            background-color: #a330fc;
            color: #d4e4ff;

        }
    }
}
`

