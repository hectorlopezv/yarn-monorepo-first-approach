import React from 'react'
import './styles.scss'
export interface InfoUserProps {
  className?: string
  DefaultOptions: any
}

export const InfoUser: React.FC<InfoUserProps> = ({
  DefaultOptions,
  className,
}) => {
  return (
    <div className={className}>
      {DefaultOptions?.map((el: any, index: number) => (
        <div key={`div_${index}`} className="info__row">
          <div className="info__label ">{el.label}</div>
          <div className="info__value ">{el.value}</div>
        </div>
      ))}
    </div>
  )
}
