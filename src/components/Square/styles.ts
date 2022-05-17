import { Box } from "@chakra-ui/react"
import styled from "styled-components"

export const SquareButton = styled(Box)`
  border: 2px solid #454953;
  display: grid;
  place-items: center;
  font-size: 2rem;
  font-family: Arial, Helvetica, sans-serif;
  color: #28292c;
  cursor: pointer;

  &:active {
    background-color: #b9bdc5;
  }
`
