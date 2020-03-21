import React from 'react'
import styled from 'styled-components'
import ContactLinks from './ContactLinks'
import { Typography } from '../styleguide/Typography'

const { SmallLead } = Typography

const FooterBase = styled.div`
  align-items: center;
  display: flex;
  height: 42px;
  width: 100%;
  z-index: 99;
  background-color: ${({ theme }) => theme.colors.darker};
`

export default function Footer() {
  return (
    <FooterBase>
      <SmallLead padding="0px 12px">Contact Me</SmallLead>
      <ContactLinks />
    </FooterBase>
  )
}
