import React from 'react'

import {
  CardsContainer,
  TitleContainer,
  Title,
  ChildrenContainer,
} from './styles'

export interface CardsProps {
  children: JSX.Element
  title: string
  classExtra?: string
}

export const Cards: React.FC<CardsProps> = ({
  classExtra = '',
  title = '',
  children,
}) => {
  return (
    <CardsContainer classExtra={classExtra}>
      {title && (
        <TitleContainer>
          <Title>{title}</Title>
        </TitleContainer>
      )}

      {children && <ChildrenContainer>{children}</ChildrenContainer>}
    </CardsContainer>
  )
}
