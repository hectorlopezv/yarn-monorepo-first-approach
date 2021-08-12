import React from 'react'
import {Card as CardContainer, Title, Link} from './styles'

export interface Card_SCProps {
  icon: JSX.Element
  title: string
  link: string
  linkTitle: string
  onClick: (...args: any[]) => any
}

export const Card: React.FC<Card_SCProps> = ({
  icon,
  title,
  onClick,

  link,
  linkTitle,
}) => {
  return (
    <CardContainer tabIndex={0}>
      {icon}
      <Title tabIndex={0}>{title}</Title>
      <Link onClick={onClick} to={link}>
        {linkTitle}
      </Link>
    </CardContainer>
  )
}
