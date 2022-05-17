import { SquareButton } from "./styles"

interface SquareProps {
  index: number
  value: string
  handleClick(index: number): void
}
export const Square = ({ index, value, handleClick }: SquareProps) => {
  return <SquareButton onClick={() => handleClick(index)}>{value}</SquareButton>
}
