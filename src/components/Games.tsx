import React from 'react'
import styled from 'styled-components'
import TicTacToe from './games/tictactoe/TicTacToe'
import Base from './Base'
import Box from '../styleguide/Box'

import { Typography } from '../styleguide/Typography'

const { H2 } = Typography

const GamesBase = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  position: relative;
`
export default function Games() {
  return (
    <Base>
      <GamesBase>
        <H2 color="darker" textAlign="center">
          Bored? Play some games:
        </H2>
        <TicTacToe />
      </GamesBase>
    </Base>
  )
}
