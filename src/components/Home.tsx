import React from 'react'
import styled from 'styled-components'
import Base from './Base'
import Box from '../styleguide/Box'
import { Typography } from '../styleguide/Typography'

const { LargeLead, H2 } = Typography

const Image = styled.img`
  width: 100%;
  height: 100%;
`
const TopWrapper = styled(Box)`
  display: flex;
  align-items: center;
`
export default function Home() {
  return (
    <Base>
      <TopWrapper>
        <Box paddingLeft="5px">
          <H2 color="darker" textAlign="center">
            Hey, there! I&apos;m Emily.
          </H2>
          <LargeLead textAlign="center">
            Frontend engineer, UX enthusiast, and chocolate lover based in New York City.{' '}
          </LargeLead>
        </Box>
        <Image src="/images/emily.jpeg" />
      </TopWrapper>
    </Base>
  )
}
