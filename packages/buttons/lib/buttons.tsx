import {Container, Limpiar, Generate} from './styles'
import React from 'react'

export interface Buttons_SCProps {
  className?: string
  show: [boolean, boolean]
  disableMessage?: boolean
  cleanMessage?: string
  handleCancel?: (...args: any[]) => any
  generateMessage?: string
  disableGenerate?: boolean
  querySickLeaves?: (...args: any[]) => any
}

export const Buttons: React.FC<Buttons_SCProps> = ({
  className,

  show,
  disableMessage,
  cleanMessage,
  handleCancel,
  generateMessage,
  disableGenerate,
  querySickLeaves,
}) => {
  return (
    <Container className={className}>
      {show[0] === true && (
        <Limpiar
          type="button"
          disabled={disableMessage}
          value={cleanMessage}
          onClick={handleCancel}
          aria-label="cleaning function"
          data-testid="clean"
        />
      )}

      {show[1] === true && (
        <Generate
          type="button"
          value={generateMessage}
          disabled={disableGenerate}
          onClick={querySickLeaves}
          aria-label="generate function"
          data-testid="generate"
        />
      )}
    </Container>
  )
}
