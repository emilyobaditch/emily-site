const WIN_COMBOS = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 5, 9],
  [3, 5, 7],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
]

export const ROW_INDEX = [1, 4, 7]
export const checkWinner = ({ gameState }: Record<string, any>) => {
  for (let i = 0; i < WIN_COMBOS.length; i++) {
    if (
      gameState[WIN_COMBOS[i][0]] === gameState[WIN_COMBOS[i][1]] &&
      gameState[WIN_COMBOS[i][1]] === gameState[WIN_COMBOS[i][2]]
    ) {
      return [true, gameState[WIN_COMBOS[i][0]]]
    }
  }
  return [false, '']
}
