import * as React from 'react'
import styled from 'styled-components'
import { Typography } from '../../../styleguide/Typography'

const { SmallLead } = Typography

type Props = {
  id: number
  symbol: string
  onClick: Function
  disabled: boolean
}
const SquareButton = styled.button`
  height: 100px;
  width: 100px;
  border: 1px solid ${({ theme }) => theme.colors.darker};
  background-color: ${({ theme }) => theme.colors.infra};
`
const Square: React.FC<Props> = ({ id, symbol = '', onClick, disabled }) => {
  return (
    <SquareButton onClick={() => onClick(id)} disabled={disabled}>
      <SmallLead textAlign="center">{symbol}</SmallLead>
    </SquareButton>
  )
}
export default Square
