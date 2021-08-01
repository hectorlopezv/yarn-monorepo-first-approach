import React from 'react'
import {Container, NumberContainer, Digit} from './styles'
export interface Phase1_SCProps {
  phase: number
  className?: string
  setRef: (
    node: HTMLElement | null | undefined,
  ) => HTMLElement | null | undefined
}

export const Phase1: React.FC<Phase1_SCProps> = ({
  setRef,
  children,
  phase = 1,
  className,
}) => {
  return (
    <Container phase={phase} ref={setRef} className={className}>
      <NumberContainer>
        <Digit phase={phase}>1</Digit>
      </NumberContainer>
      {children}
    </Container>
  )
}
