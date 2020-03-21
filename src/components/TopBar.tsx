import React from 'react'
import styled from 'styled-components'
import NavLinks from './NavLinks'
import { Typography}  from '../styleguide/Typography'
const { H1 } = Typography;


const TopBarBase = styled.div`
align-items: center; 
display:flex; 
position: fixed; 
top: 0; 
height: 42px; 
width: 100%; 
background-color: ${({theme}) => theme.colors.dull};
`
export default function TopBar(){

    return (
    <TopBarBase>
        
        <H1>Emily Obaditch</H1>
        <NavLinks />
        
    </TopBarBase>
    )
}
