import { Flex, FormLabel } from "@chakra-ui/react"
import { useState, useMemo, FormEvent } from "react"
import { Button } from "../components/Button"
import { TextInput } from "../components/Input"
import { Header, HeadingText, MainContainer } from "../styles/global"

interface Props {
  handleStart(players: string[]): void
}
const Start = (props: Props) => {
  const { handleStart } = props
  const [players, setPlayers] = useState(["", ""])
  const handleInput = (event: FormEvent<HTMLInputElement>, index: number) => {
    const newPlayers = [...players]
    newPlayers.splice(index, 1, event.currentTarget.value)
    setPlayers(newPlayers)
  }
  const canStart = useMemo(
    () => players.every((player) => player && player.length > 0),
    [players]
  )
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!canStart) return
    handleStart(players)
  }
  return (
    <MainContainer>
      <Header>
        <HeadingText>Tic Tac Toe</HeadingText>
      </Header>
      <form onSubmit={handleSubmit}>
        <Flex alignItems="baseline">
          <FormLabel htmlFor="player1" mt={8}>
            Player 1
          </FormLabel>
          <TextInput
            variant="primaryInput"
            type="text"
            placeholder="Player's 1 username"
            value={players[0]}
            onChange={(e) => handleInput(e, 0)}
          />
        </Flex>

        <Flex alignItems="baseline">
          <FormLabel htmlFor="player2" mt={4}>
            Player 2
          </FormLabel>
          <TextInput
            variant="primaryInput"
            type="text"
            placeholder="Player's 2 username"
            value={players[1]}
            onChange={(e) => handleInput(e, 1)}
          />
        </Flex>

        <Flex justifyContent="center">
          <Button
            variant="outlined"
            type="submit"
            disabled={!canStart}
            width="100%"
          >
            Start
          </Button>
        </Flex>
      </form>
    </MainContainer>
  )
}
export default Start
