import React from 'react';
import {
    Container,
    Box,
    Name,
    Link,
    Circle,
    Image

} from './styles/product'
import VanillaTilt from 'vanilla-tilt';


export default function Product({children, ...restProps}){
    VanillaTilt.init(document.querySelectorAll(".tilt"), {
		max: 25,
		speed: 400
	});
    return(
        <Container>
            <Box className = "tilt">
                <Name>Nike Shoes</Name>
                <Link href ="#">Comprar</Link>
                <Circle></Circle>
                <Image src="images/green-shoe.png" />
            </Box>
            <Box className = "tilt">
                <Name>Nike Shoes</Name>
                <Link href ="#">Comprar</Link>
                <Circle></Circle>
                <Image src="images/yellow-shoe.png" />
            </Box>
            <Box className = "tilt">
                <Name>Nike Shoes</Name>
                <Link href ="#">Comprar</Link>
                <Circle></Circle>
                <Image src="images/red-shoe.png" />
            </Box>
        </Container>
    )
}