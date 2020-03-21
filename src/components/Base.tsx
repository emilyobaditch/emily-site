import React from 'react'
import styled from 'styled-components'
import TopBar from './TopBar'
import Footer from './Footer'
import Box from '../styleguide/Box'

type Props = {
  children?: any
}
const Content = styled.div`
  min-height: 100vh;
  align-items: center;
  display: flex;
`
export default function Base({ children }: Props) {
  return (
    <Box marginTop="64px">
      <TopBar />
      <Content>{children}</Content>
      <Footer />
    </Box>
  )
}
