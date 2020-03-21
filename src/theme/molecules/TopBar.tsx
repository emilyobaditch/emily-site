import React from 'react'
import styled from 'styled-components'
import Text from '../atoms/Text'
import NavLinks from './NavLinks'

const TopBarBase = styled.div`
align-items: center; 
display:flex; 
position: fixed; 
top: 0; 
height: 42px; 
width: 100%; 
background-color: ${props => props.theme.colors.primary.dull};
`
export default function TopBar(){

    return (
    <TopBarBase>
        
        <Text>Emily Obaditch</Text>
        <NavLinks />
        
    </TopBarBase>
    )
}
