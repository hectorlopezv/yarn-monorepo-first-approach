import React from 'react'
import {Container, Inner, Label} from './styles'
export interface Phase2Props {
  phase: number
  className?: string
  setRef?: (node: HTMLElement | null | undefined) => any
}

export const Phase2: React.FC<Phase2Props> = ({
  setRef = (node: HTMLElement | null | undefined) => node,
  children,
  phase = 1,
  className,
}) => {
  return (
    <Container ref={setRef} className={className}>
      <Inner
        data-testid={`phase-2`}
        tabIndex={0}
        aria-label={`the phase of the container is 2 and the actual phase is ${phase}`}
      >
        <Label phase={phase}>2</Label>
        {children}
      </Inner>
    </Container>
  )
}
