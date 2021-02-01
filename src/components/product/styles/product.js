import styled from 'styled-components/macro'

export const Container = styled.div`
position: relative;
display: flex;
margin: auto;
justify-content: center;
align-items : center;
flex-wrap: wrap;
width: 1200px;
transform-style: preserve-3d;
`

export const Link = styled.a`
    position: absolute;
    bottom: 0px;
    left: 50%;
    trasform-style: preserve-3d;
    transform: translate3d(-50%,0,75px);
    color: #fff;;
    background: #333;
    padding: 10px 25px;
    border-radius: 30px;
    text-decoration: none;
    transition: 0.5s;
    opacity: 0;
    z-index: 10;

`;

export const Name = styled.h2`
    font-weight: 700;
    font-style: italic;
    font-size: 32px;
    position: absolute;
    top: 0;
    left: 0;
    text-align: center;
    color: #fff;
    width: 100%;
    trasform-style: preserve-3d;
    transform: translate3d(0,0,75px);
    transition: 0.5s;
    opacity: 0;
    z-index: 10;

   
`;


export const Circle = styled.div`
    position: absolute;
    top: 100px;
    left: 50px;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background: #fff;
    transform-style: preserve-3d;
    transform: translate3d(-50%; -50%, 50px);
    z-index: 10;
    opacity: 1;
    transition: 0.5s;

    
`;

export const Image = styled.img`
   width: 300px;
   position: absolute;
    top: 50%;
    left: 50%;
    transition: 0.5s;
    z-index: 11;
    transform-style: preserve-3d;
    transform: translate3d(-50%, -50%, 0px) rotate(-15deg);

`;

export const Box = styled.div`
    position: relative;
    width: 300px;
    height: 400px;
    margin: 40px;
    background: #232323;
    border-radius: 25px;
    transform-style: preserve-3d;

    &:before{
        content: "NIKE";
        position: absolute;
        top: 20px;
        left:20px;
        font-size: 6em;
        font-weight: 900;
        color: #fff;
        font-style: italic;
        opacity: 0;
        transition: 0.5s;
    }

    &:after{
        content: "SHOES";
        position: absolute;
        bottom: 20px;
        left:20px;
        font-size: 5em;
        font-weight: 900;
        color: #fff;
        font-style: italic;
        opacity: 0;
        transition: 0.5s;
    }
    

    &:hover:before, &:hover:after{
        opacity: 0.07;
    }
    &:hover{
        ${Name}{
            top: 40px;
            opacity: 1;
        }
        ${Link}{
            bottom: 40px;
            opacity: 1;
        }
        ${Image}{
            transform: translate3d(-50%, -50%, 100px) rotate(-15deg);
        }
    }
   
    &:nth-child(1) ${Circle}, &:nth-child(1) ${Link}{
        background-color: #499714 !important;
    }
    &:nth-child(2) ${Circle}, &:nth-child(2) ${Link}{
        background-color: #e68c1a !important;
    }
    &:nth-child(3) ${Circle}, &:nth-child(3) ${Link}{
        background-color: #d83713 !important;
    }


`;

