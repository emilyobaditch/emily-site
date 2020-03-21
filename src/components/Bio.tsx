import React from 'react'
import styled from 'styled-components'
import Box from '../styleguide/Box'
import Base from './Base'

import { Typography } from '../styleguide/Typography'

const { H3, Paragraph, SmallLead } = Typography

const BioBase = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  position: relative;
`
const Image = styled.img`
  width: 100%;
  position: fixed;
  bottom: 0;
  opacity: 20%;
  z-index: -1;
`
export default function Bio() {
  return (
    <Base>
      <BioBase>
        <H3 textAlign="center">About Me</H3>
        <SmallLead textAlign="center">Software, , </SmallLead>
        <Paragraph padding={[0, 0, '0px 200px']} textAlign="center">
          I&apos;m Emily, thanks for coming to my site! Here&apos;s little bit about me. I was born
          in New Jersey, studied Computer Science at the University of Notre Dame (go Irish!) and
          currently live in New York city. I am a frontend engineer with a strong love for React.
          When I&apos;m not creating awesome code I spend my time trying new restaurants, going to
          spin class, and listening to music.
          <br />
          <br />
          I&apos;ve made this website to learn new skills and have something to call completely my
          own. Currently refining my TypeScript acumen and playing around with color palettes.
          <br />
          <br />
          That&apos;s about it for now!
        </Paragraph>
        <Image src="/images/background.png" />
      </BioBase>
    </Base>
  )
}
