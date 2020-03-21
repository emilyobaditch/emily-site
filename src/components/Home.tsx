import React from 'react'
import styled from 'styled-components'
import Base from './Base'
import Box from '../styleguide/Box'
import { Typography } from '../styleguide/Typography'
import { useMediaQuery } from '../utils/hooks'

const { LargeLead, H2 } = Typography

const Image = styled.img`
  width: 100%;
  height: 100%;
  z-index: -1;
`
const MobileImage = styled.img`
  position: fixed;
  opacity: 0.2;
  bottom: 0;
  z-index: -1;
`
const TopWrapper = styled(Box)`
  display: flex;
  align-items: center;
  position: relative;
`
export default function Home() {
  const smUp = useMediaQuery(2)
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
        {smUp ? <Image src="images/emily.jpeg" /> : <MobileImage src="images/emily.jpeg" />}
      </TopWrapper>
    </Base>
  )
}
