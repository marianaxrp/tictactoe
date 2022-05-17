import { StyledButton } from "./styles"

export interface ButtonProps {
  variant?: string
  disabled?: boolean
  onClick?: () => void
  children: any
  type?: "submit" | "reset" | "button"
  width?: string
}

export const Button = ({
  variant,
  onClick,
  children,
  type,
  width
}: ButtonProps) => {
  return (
    <StyledButton variant={variant} onClick={onClick} type={type} width={width}>
      {children}
    </StyledButton>
  )
}
