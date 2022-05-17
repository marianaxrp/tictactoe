import { Header, HeadingText, MainContainer } from "../../styles/global"
import { Board } from "../Board"

interface GameProps {
  board: string[]
  handleClick(index: number): void
}
export const Game = ({ board, handleClick }: GameProps) => {
  return (
    <MainContainer>
      <Header>
        <HeadingText>Tic Tac Toe</HeadingText>
      </Header>
      <Board board={board} handleClick={handleClick} />
    </MainContainer>
  )
}
