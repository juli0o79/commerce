import { createGlobalStyle } from 'styled-components/macro'

export const GlobalStyles = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Arimo:ital,wght@0,500;0,600;0,700;1,700&display=swap')

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html, body {
        display: flex;
        font-family:'Arimo', sans-serif;
        justify-content: center;
        width: 100%;
        margin: 0px;
        background-color: #000;
        
    }

`