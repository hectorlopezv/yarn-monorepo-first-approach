import React from 'react'
import {Container, LabelContainer, Label, InputContainer, Input} from './styles'
export interface InputSimpleProps {
  labelInput: string
  maxLength: number
  value: string
  disabled: boolean
  placeholder: string
  type?: string
  onChange: (...args: unknown[]) => void
  onKeyDown: (...args: unknown[]) => void
}

const InputSimple: React.FC<InputSimpleProps> = ({
  labelInput,
  maxLength,
  value,
  disabled,
  placeholder,
  type = 'text',
  onChange = () => console.log('onChange'),
  onKeyDown = () => console.log('keyDown'),
}) => {
  return (
    <Container>
      <LabelContainer>
        <Label>{labelInput}</Label>
      </LabelContainer>

      <InputContainer>
        <Input
          onKeyDown={onKeyDown}
          type={type}
          onChange={onChange}
          value={value}
          maxLength={maxLength}
          disabled={disabled}
          placeholder={placeholder ? placeholder : ''}
        />
      </InputContainer>
    </Container>
  )
}

export default InputSimple
