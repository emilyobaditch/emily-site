import React from 'react'
import styled from 'styled-components'
import NavLinks from './NavLinks'
import Box from '../styleguide/Box'
import { Typography } from '../styleguide/Typography'

const { H2 } = Typography

const TopBarBase = styled.div`
  align-items: center;
  justify-content: space-between;
  display: flex;
  position: fixed;
  top: 0;
  height: 62px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.dull};
`
const Wrapper = styled(Box)`
  display: flex;
`
export default function TopBar() {
  return (
    <TopBarBase>
      <H2 paddingLeft="2px">emily</H2>
      <Wrapper>
        <NavLinks />
      </Wrapper>
    </TopBarBase>
  )
}
