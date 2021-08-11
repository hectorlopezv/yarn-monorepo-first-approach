/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
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
        <div
          key={`div_${index}`}
          className="info__row"
          aria-describedby={`label_info_${index} value_info_${index}`}
          tabIndex={0}
        >
          <div className="info__label" id={`label_info_${index}`}>
            {el.label}
          </div>
          <div className="info__value" id={`value_info_${index}`}>
            {el.value}
          </div>
        </div>
      ))}
    </div>
  )
}
