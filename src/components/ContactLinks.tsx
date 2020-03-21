import React from 'react'
import styled from 'styled-components'
import Box from '../styleguide/Box'

const Icon = styled.img`
  width: 24px;
  height: 24px;
  padding-right: 12px;
`

const ContactLinksBase = styled(Box)`
  display: flex;
`
export default function ContactLinks() {
  return (
    <ContactLinksBase>
      <a href={'https://github.com/emilyobaditch'}>
        <Icon src="/images/github.png" />
      </a>
      <a href={'https://www.linkedin.com/in/emily-obaditch-a0090511b/'}>
        <Icon src="/images/linkedin.png" />
      </a>
    </ContactLinksBase>
  )
}
