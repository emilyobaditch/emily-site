import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Typography } from '../styleguide/Typography'
import Box from '../styleguide/Box'

const { H5 } = Typography

const NavLinkBase = styled(Box)`
  display: flex;
  margin-right: 12px;
`

export default function NavLinks() {
  return (
    <NavLinkBase>
      <Link style={{ textDecoration: 'none' }} to={'/'}>
        <H5 paddingRight="12px">Home</H5>
      </Link>
      <Link style={{ textDecoration: 'none' }} to={'/bio'}>
        <H5 paddingRight="12px">Bio</H5>
      </Link>
      <Link style={{ textDecoration: 'none' }} to={'/contact'}>
        <H5 paddingRight="12px">Contact</H5>
      </Link>
    </NavLinkBase>
  )
}
