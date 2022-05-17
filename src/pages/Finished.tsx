import { Button } from "../components/Button"
import { Leaderboard } from "../components/Leaderboard"
import {
  Header,
  HeadingText,
  MainContainer,
  StyledText
} from "../styles/global"

interface FinishedGameProps {
  name: string | null
  restart(): void
}
const Finished = ({ name, restart }: FinishedGameProps) => {
  return (
    <MainContainer>
      <Header>
        <HeadingText>Tic Tac Toe</HeadingText>
      </Header>
      <StyledText>
        {name && `Player ${name} won the game`}
        {!name && "It's a tie"}
      </StyledText>
      <Leaderboard />
      <Button variant="outlined" onClick={restart} width="25%">
        Restart
      </Button>
    </MainContainer>
  )
}
export default Finished
