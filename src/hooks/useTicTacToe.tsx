import { useState, useEffect } from "react"
interface ReturnValue {
  board: string[]
  status: string
  winner: string | null
  handleClick: (index: number) => void
  handleRestart: () => void
  handleStart: (players: string[]) => void
}
// eslint-disable-next-line import/no-anonymous-default-export
export default (): ReturnValue => {
  const [board, setBoard] = useState(Array(9).fill(""))
  const [player, setPlayer] = useState("X")
  const [winner, setWinner] = useState<string | null>(null)
  const [status, setStatus] = useState("created")
  const [players, setPlayers] = useState(["", ""])

  const winningPositions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]

  const checkWin = () => {
    winningPositions.forEach((currentPattern) => {
      const firstPlayer = board[currentPattern[0]]
      if (firstPlayer === "") return
      let foundWinningPattern = true

      currentPattern.forEach((index) => {
        if (board[index] !== firstPlayer) {
          foundWinningPattern = false
        }
      })

      if (foundWinningPattern) {
        if (player === "X") {
          setWinner(players[0])
          localStorage.setItem("winnerX", player)
        } else {
          setWinner(players[1])
          localStorage.setItem("winnerO", player)
        }
        setStatus("finished")
        return
      }
    })
  }

  useEffect(() => {
    if (status !== "started") return

    handlePlayerTurnChange()
    checkIfTie()
    checkWin()
  }, [board, players, status])

  const checkIfTie = () => {
    let filledSquare = true
    let tie: number = 0

    board.forEach((square) => {
      if (square === "") {
        filledSquare = false
      }
    })
    if (filledSquare) {
      localStorage.setItem("tie", JSON.stringify(++tie))
      setStatus("finished")
    }
  }

  const handlePlayerTurnChange = () => {
    player === "X" ? setPlayer("O") : setPlayer("X")
  }

  const handleClick = (square: any): void => {
    setBoard(
      board.map((value, index) => {
        if (index === square && value === "") {
          return player
        }
        return value
      })
    )
  }

  const handleStart = (players: string[]) => {
    setPlayers(players)
    setPlayer("O")
    setStatus("started")
  }

  const handleRestart = () => {
    setBoard(Array(9).fill(""))
    setWinner("")
    setStatus("created")
  }

  return { board, status, winner, handleClick, handleRestart, handleStart }
}
