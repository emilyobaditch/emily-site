import React from 'react'
import styled from 'styled-components'
import Base from './Base'
import Box from '../styleguide/Box'
import { Typography } from '../styleguide/Typography'
import ContactLinks from './ContactLinks'

const { LargeLead, H2, SmallLead } = Typography

const ContactBase = styled(Box)`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  justify-content: center;
`
const EmailLink = styled.a`
  color: ${({ theme }) => theme.colors.darker};
`
export default function Contact() {
  return (
    <Base>
      <ContactBase>
        <H2 color="darker" textAlign="center">
          Contact Me
        </H2>
        <LargeLead padding={['0px 8px']} textAlign="center">
          Looking to connect? Feel free to reach out!
        </LargeLead>
        <SmallLead padding={['0px 16px']} textAlign="center">
          Email{' '}
          <EmailLink href="mailto:ecobaditch@gmail.com?subject=Reaching%20Out">
            ecobaditch@gmail.com
          </EmailLink>{' '}
          for resume
        </SmallLead>
        <ContactLinks />
      </ContactBase>
    </Base>
  )
}
