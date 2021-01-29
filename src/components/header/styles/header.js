import styled from 'styled-components/macro'

export const Section = styled.section`
    position: relative;
    width: 100%;
    height: 100%;;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 30px;

    img{
        position: absolute;
        top: 0;
        left:0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        pointer-events: none;

    }

    &:before{
        content: "";
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 100px;
        background: linear-gradient(to top, #000, transparent);
        z-index: 10000;
    }


`;

export const BackGround = styled.img`
`;

export const JustDoIt = styled.img`
`;

export const Shoes = styled.img`
`;

export const Title = styled.h2`
    position: relative;
    color: white;
    font-size: 10em;
    z-index: 1;
`;


