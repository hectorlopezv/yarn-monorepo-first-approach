import React from 'react'
import {Container, Inner, Label} from './styles'
export interface Phase2Props {
  phase: number
  className?: string
  setRef: (
    node: HTMLElement | null | undefined,
  ) => HTMLElement | null | undefined
}

export const Phase2: React.FC<Phase2Props> = ({
  setRef,
  children,
  phase = 1,
  className,
}) => {
  return (
    <Container ref={setRef} className={className}>
      <Inner>
        <Label phase={phase}>2</Label>
        {children}
      </Inner>
    </Container>
  )
}
