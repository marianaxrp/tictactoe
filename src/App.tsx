import { Game } from "./components/Game"
import Start from "./pages/Start"
import Finished from "./pages/Finished"
import useTicTacToe from "./hooks/useTicTacToe"
import { ChakraProvider } from "@chakra-ui/react"
import theme from "./styles/theme"
const App = () => {
  const game = useTicTacToe()

  return (
    <ChakraProvider theme={theme}>
      <div className="App">
        {game.status === "created" && <Start handleStart={game.handleStart} />}
        {game.status === "finished" && (
          <Finished name={game.winner} restart={game.handleRestart} />
        )}
        {game.status === "started" && (
          <Game board={game.board} handleClick={game.handleClick} />
        )}
      </div>
    </ChakraProvider>
  )
}
export default App
