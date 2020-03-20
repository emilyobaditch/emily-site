import React from 'react'
import styled from 'styled-components'

type Props = {
    children: any
}

const TextBase = styled.text`
    fontFamily: Sanchez;
    color: ${props => props.theme.colors.primary.dark};
`
export default function Text({children} : Props){
    return (
        <TextBase>{children}</TextBase>
    )
}