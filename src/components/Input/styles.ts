import { Flex, Input } from "@chakra-ui/react"
import styled from "styled-components"

export const FormContainer = styled(Flex)`
  padding: 8px;
`

export const StyledInput = styled(Input)`
  border: 1.5px solid #d3d3d3;
  padding: 10px;
  color: #252627;

  :hover {
    border-color: #ababab;
  }
  :active {
    border-color: #ababab;
  }
  :focus {
    border-color: #ababab;
  }
`
