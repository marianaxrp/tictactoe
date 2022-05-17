import { Text, Grid, GridItem } from "@chakra-ui/react"
import styled from "styled-components"

export const StyledLeaderboard = styled(Grid)`
  border: 1.5px solid #4a4f4f;
  border-radius: 4px;
  width: 14rem;
  margin: 1.5rem;
  justify-items: center;
`
export const StyledGridItem = styled(GridItem)`
  width: 100%;
  justify-content: center;
  text-align: center;
`

export const BoardTitle = styled(Text)`
  font-weight: 600;
  width: 100%;
`

export const BoardText = styled(Text)``
