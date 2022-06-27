import React from 'react'
import { StyledH2, StyledH3, StyledH4 } from './Title.styled'

const Title = ({tagName, text}) => {    
    switch (tagName){
        case "h2": 
        return <StyledH2>{text}</StyledH2>
        case "h3":
        return <StyledH3>{text}</StyledH3>
        case "h4":
        return <StyledH4>{text}</StyledH4>
    }  
}

export default Title;