import React from 'react';
import{
    Container,
    IconList,
    IconItem,
    IconLink
} from "./styles/commerce"

export default function Commerce({children, ...restProps}){
    return(
        <Container {...restProps}> {children} </Container>
    )
}

Commerce.Contact = function CommerceContact({children, ...restProps}){
    return(
        <IconList>
            <IconItem>
                <IconLink href= "#">
                    <i className="fa fa-twitter" aria-hidden="true"></i>
                </IconLink>
            </IconItem>
            <IconItem>
                <IconLink href= "#">
                    <i className="fa fa-whatsapp" aria-hidden="true"></i>

                </IconLink>
            </IconItem>
            <IconItem>
                <IconLink href= "#">
                <i className="fa fa-youtube-play" aria-hidden="true"></i>
                </IconLink>
            </IconItem>
            <IconItem>
                <IconLink href= "#">
                <i className="fa fa-facebook-official" aria-hidden="true"></i>
                </IconLink>
            </IconItem>
        </IconList>
    )
} 