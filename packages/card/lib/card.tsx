import React from 'react'
import {Card as CardContainer, Title, Link} from './styles'

export interface Card_SCProps {
  icon: JSX.Element
  title: string
  link: string
  linkTitle: string
  onClick: (...args: any[]) => any
}

export const Card_SC: React.FC<Card_SCProps> = ({
  icon,
  title,
  onClick,
  link,
  linkTitle,
}) => {
  return (
    <CardContainer>
      {icon}
      <Title>{title}</Title>
      <Link onClick={onClick} to={link}>
        {linkTitle}
      </Link>
    </CardContainer>
  )
}
