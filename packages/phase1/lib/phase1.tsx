import React from 'react'
import {Container, NumberContainer, Digit} from './styles'
export interface Phase1_SCProps {
  phase: number
  className?: string
  setRef?: (node: HTMLElement | null | undefined) => any
}

export const Phase1: React.FC<Phase1_SCProps> = ({
  setRef,
  children,
  phase = 1,
  className,
}) => {
  return (
    <Container phase={phase} ref={setRef} className={className}>
      <NumberContainer
        data-testid={`phase-1`}
        tabIndex={0}
        aria-label={`the phase of the container is 1 and the actual phase is ${phase}`}
      >
        <Digit phase={phase}>1</Digit>
      </NumberContainer>
      {children}
    </Container>
  )
}
