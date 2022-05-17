import { Flex, Text } from "@chakra-ui/react"
import styled, { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  @media(max-width: 1080px) {
    font-size: 93.75%;
  }

  @media(max-width: 729px) {
    font-size: 87.5%;
  }
}
`
export const Header = styled(Flex)`
  width: 100%;
  justify-content: center;
  background-color: #696d76;
  margin-bottom: 2rem;
`
export const HeadingText = styled(Text)`
  font-size: 3rem;
  font-family: "Poppins", sans-serif;
  color: #252627;
  padding: 2rem;
`
export const MainContainer = styled(Flex)`
  height: 100vh;
  flex-direction: column;
  align-items: center;
  background-color: #dfe6f5;
`
export const StyledText = styled(Text)`
  font-family: "Poppins", sans-serif;
  color: #252627;
  font-size: 1.5rem;
`
