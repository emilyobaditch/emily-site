import * as React from 'react'
import styled from 'styled-components'
import Box from '../../../styleguide/Box'
import Square from './Square'
import CheckBox from '../../../styleguide/Checkbox'
import { Typography } from '../../../styleguide/Typography'
import { checkWinner, ROW_INDEX } from './utils'

const { LargeLead, SmallLead } = Typography

const RowBase = styled(Box)`
  display: flex;
`

const PlayAgainButton = styled.button`
  background-color: #fff;
  border: none;
  color: ${({ theme }) => theme.colors.darker};
`

const Board = styled(Box)`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`

const TicTacToe: React.FC = () => {
  const [currPlayer, setCurrPlayer] = React.useState('X')
  const [isOnePlayer, setIsOnePlayer] = React.useState(false)

  const [gameFull, setGameFull] = React.useState(false)
  const [gameState, setGameState] = React.useState<Record<string, string> | null>(null)
  const [winner, setWinner] = React.useState(null)
  const onSquareClick = React.useCallback(
    (id: string) => {
      const newState = { ...gameState, [id]: currPlayer }
      setGameState({ ...newState })
      const nextPlayer = currPlayer === 'X' ? 'O' : 'X'
      setCurrPlayer(nextPlayer)
    },
    [currPlayer, gameState],
  )

  const handleReset = () => {
    setGameState({})
    setGameFull(false)
    setCurrPlayer('X')
  }

  const setOnePlayer = () => {
    setIsOnePlayer(!isOnePlayer)
    handleReset()
  }
  const squareSymbol = (id: string | number) => {
    if (gameState && id in gameState) {
      return gameState[id]
    }
    return ''
  }

  React.useEffect(() => {
    if (gameState) {
      const [isWinner, player] = checkWinner({ gameState })
      if (isWinner) {
        setWinner(player)
      }
      if (Object.keys(gameState).length === 9) {
        setGameFull(true)
      }
    }
  }, [gameState])

  React.useEffect(() => {
    if (isOnePlayer && currPlayer === 'O' && gameState && Object.keys(gameState).length < 9) {
      let rando = Math.floor(Math.random() * 10)
      while (rando in gameState) {
        rando = Math.floor(Math.random() * 10)
      }
      onSquareClick(String(rando))
    }
  }, [currPlayer, gameState, isOnePlayer, onSquareClick])

  return (
    <Board>
      <LargeLead>{`Current Player: ${isOnePlayer ? 'X' : currPlayer} `}</LargeLead>
      {winner && (
        <>
          <SmallLead>{`Player ${winner} wins!`}</SmallLead>
          <PlayAgainButton onClick={handleReset}>Play again?</PlayAgainButton>
        </>
      )}
      {ROW_INDEX.map(val => {
        return (
          <RowBase key={val}>
            <Square
              disabled={!!winner || gameFull}
              id={val}
              onClick={onSquareClick}
              symbol={squareSymbol(val)}
            />
            <Square
              disabled={!!winner || gameFull}
              id={val + 1}
              onClick={onSquareClick}
              symbol={squareSymbol(val + 1)}
            />
            <Square
              disabled={!!winner || gameFull}
              id={val + 2}
              onClick={onSquareClick}
              symbol={squareSymbol(val + 2)}
            />
          </RowBase>
        )
      })}
      <PlayAgainButton onClick={handleReset}>Reset</PlayAgainButton>
      <CheckBox onClick={setOnePlayer}>One Player</CheckBox>
    </Board>
  )
}

export default TicTacToe
