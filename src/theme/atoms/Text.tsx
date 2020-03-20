import React from 'react'
import styled from 'styled-components'

type Props = {
    children: any
    fontSize?: string
}

const TextBase = styled.text`
    fontFamily: Sanchez;
    font-size: ${props => props.fontSize}; 
    color: ${props => props.theme.colors.primary.ultra};
`
export default function Text({children, fontSize  = "14px" } : Props){
    return (
        <TextBase fontSize={fontSize}>{children}</TextBase>
    )
}