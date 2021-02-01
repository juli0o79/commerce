import styled from 'styled-components/macro'

export const Section = styled.section`
    position: relative;
    margin: auto;
    width: 1400px;
    height: 1100px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 30px;
    margin-bottom: 50px;

    img{
        position: absolute;
        top: 0;
        left:0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        pointer-events: none;

    }

   


`;

export const BackGround = styled.img`
`;

export const JustDoIt = styled.img`
    position: relative;
    transform: translateY(${({scroll}) => scroll + "px" })
`;

export const Shoes = styled.img`
position: relative;
    transform: translateY(${({scroll}) => "-" + scroll + "px" })
`;

export const Title = styled.h2`
    position: relative;
    color: white;
    font-size: 10em;
    z-index: 1;
`;


