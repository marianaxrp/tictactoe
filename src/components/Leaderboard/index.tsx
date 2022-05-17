import { GridItem, Text } from "@chakra-ui/react"

import { BoardTitle, StyledGridItem, StyledLeaderboard } from "./styles"

export const Leaderboard = () => {
  const winnerX = localStorage.getItem("winnerX")
  const winnerO = localStorage.getItem("winnerO")
  const tie = localStorage.getItem("tie")

  return (
    <StyledLeaderboard
      templateColumns="repeat(3, 1fr)"
      templateRows="repeat(4, 1fr)"
    >
      <GridItem colSpan={3} rowSpan={1} alignSelf="center">
        <Text>LEADERBOARD</Text>
      </GridItem>
      <StyledGridItem>
        <BoardTitle>X</BoardTitle>
        <Text>{winnerX}</Text>
      </StyledGridItem>
      <StyledGridItem>
        <BoardTitle>Ties</BoardTitle>
        <Text>{tie}</Text>
      </StyledGridItem>
      <StyledGridItem>
        <BoardTitle>O</BoardTitle>
        <Text>{winnerO}</Text>
      </StyledGridItem>
    </StyledLeaderboard>
  )
}
