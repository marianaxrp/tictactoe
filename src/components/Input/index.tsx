import { FormContainer, StyledInput } from "./styles"

interface TextInputProps {
  variant: string
  type?: string
  placeholder?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  value?: any
}

export const TextInput = (props: TextInputProps) => {
  return (
    <FormContainer>
      <StyledInput
        variant={props.variant}
        type={props.type}
        placeholder={props.placeholder}
        onChange={props.onChange}
        value={props.value}
      />
    </FormContainer>
  )
}
