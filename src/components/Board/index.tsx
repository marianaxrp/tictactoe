import { useState } from "react"
import { Square } from "../Square"
import { BoardContainer } from "./styles"

interface BoardProps {
  board: string[]
  handleClick: (index: number) => void
}

export function Board({ board, handleClick }: BoardProps) {
  return (
    <BoardContainer
      templateColumns="repeat(3, 1fr)"
      templateRows="repeat(3, 1fr)"
    >
      {board.map((value, index) => (
        <Square
          key={index}
          value={value}
          index={index}
          handleClick={() => handleClick(index)}
        />
      ))}
    </BoardContainer>
  )
}
