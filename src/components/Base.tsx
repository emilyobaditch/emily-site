import React from 'react'
import styled from 'styled-components'
import TopBar from './TopBar'
import Footer from './Footer'
import Box from '../styleguide/Box'

type Props = {
  children?: any
}
const Content = styled(Box)`
  min-height: calc(100vh - 104px);
  align-items: center;
  display: flex;
`
const BaseBase = styled(Box)`
  margin-top: 64px;
  overflow: hidden;
`
export default function Base({ children }: Props) {
  return (
    <BaseBase>
      <TopBar />
      <Content>{children}</Content>
      <Footer />
    </BaseBase>
  )
}
