import React, {ReactNode} from 'react'

import {
  CardsContainer,
  TitleContainer,
  Title,
  ChildrenContainer,
} from './styles'

export interface CardsProps {
  children: ReactNode
  title: string
  classExtra?: string
}

export const Cards: React.FC<CardsProps> = ({
  classExtra = '',

  title = '',
  children,
}) => {
  return (
    <CardsContainer classExtra={classExtra} data-testid="cards container">
      {title && (
        <TitleContainer>
          <Title>{title}</Title>
        </TitleContainer>
      )}

      {children && <ChildrenContainer>{children}</ChildrenContainer>}
    </CardsContainer>
  )
}
