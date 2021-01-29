import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react'
import {
    Section,
    BackGround,
    JustDoIt,
    Shoes,
    Title
} from './styles/header'



export default function Header({children, ...restProps}){
    const background = useRef();
    const justdoit = useRef();
    const shoes = useRef();
    const value = useRef(0);
    let body = document.body.scrollY;
    let windowY = window.pageYOffset; 
    const [scroll, setScroll] = useState(0)
    useEffect(
        ()=>{
            window.addEventListener('scroll', function(){
            setScroll(window.scrollTop)
            console.log(scroll)}, true)
          
        },[scroll])
   
    return(
        <Section onScroll={()=> console.log(window.scrollY)}>
            <h1 style = {{ color : "white"}}>{value.current}</h1>
            <BackGround ref={background} src="images/background.png"/>
            <JustDoIt ref={justdoit} src="images/just-do-it.png"/>
            <Shoes ref = {shoes} src="images/bg-shoe.png"/> 
            <Title>
                Nike Shoes {scroll}
            </Title>
        </Section>
    )
}