import styled from 'styled-components/macro';

export const Container= styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const IconList = styled.ul`
     position: relative;
     display: flex;
     

`;
// font awesome e contente trabalham juntos
// No caso, todas os icones da li precisam ser estabelecidos, por isso o uso do before n li
//overflow não deixa que o ícone "transborde" enquanto a li está em tamanho 0
//Estabaleceu no elemento pai as características gerais do before e depois estipulou os individuais
//No caso, eles compartilham o mesmo before, mas os dados particulares de cada child fica separado
export const IconItem = styled.li`
    position: relative;
    list-style: none;
    margin: 0 20px;
    cursor: pointer;
    &:before{
        font-family: fontAwesome;
        position: absolute;
        left:0;
        top: 0;
        font-size: 6em;
        height:0;
        overflow: hidden;
        transition: 0.5 ease-in-out;
    }
    
    &:nth-child(1):before {
        content: '\f099';
        color: #1da1f2;
        border-bottom: 4px solid #1da1f2;
        transition: 0.5s;
    }
    &:nth-child(2):before {
        content: '\f232';
        color: #25d366;
        border-bottom: 4px solid #25d366;
        transition: 0.5s;
    }
    &:nth-child(3):before {
        content: '\f16a';
        color: #FF0000;
        border-bottom: 4px solid #FF0000;
        transition: 0.5s;
    }
    &:nth-child(4):before {
        content: '\f230';
        color: #4267B2;
        border-bottom: 4px solid #4267B2;
        transition: 0.5s;
    }

    &:hover:before {
        height: 100%;
    }
   
`;

export const IconLink = styled.a`
    text-decoration: none;
    .fa{
        font-size: 6em;
        color: #222;
    }
    
`;

