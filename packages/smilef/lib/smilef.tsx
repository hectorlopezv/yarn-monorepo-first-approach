/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import React from 'react'
import './styles.scss'

export interface SmilefProps {
  className?: string
  sad: boolean
  message1?: string
  message2?: string
  classNameSmile?: string
  titleId?: string
}

export const Smilef: React.FC<SmilefProps> = ({
  sad = false,
  className = '',
  message1 = null,
  message2 = null,
  classNameSmile = '',
  titleId = 'smile',
}) => {
  return (
    <div className={className}>
      <div className={'noRowsRecords'} role="figure">
        <div className={'noRowsRecords__smile'}>
          {sad && (
            <svg
              tabIndex={0}
              stroke="currentColor"
              fill="currentColor"
              strokeWidth={0}
              viewBox="0 0 496 512"
              className={`noRowsRecords__size ${classNameSmile}`}
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
              data-testid="sadFace"
              role="figure"
              aria-label="sadface Image"
            >
              <path
                d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 448c-110.3 0-200-89.7-200-200S137.7 56 248 56s200 89.7 200 200-89.7 200-200 200zm-80-216c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32zm160-64c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zm-80 128c-40.2 0-78 17.7-103.8 48.6-8.5 10.2-7.1 25.3 3.1 33.8 10.2 8.4 25.3 7.1 33.8-3.1 16.6-19.9 41-31.4 66.9-31.4s50.3 11.4 66.9 31.4c8.1 9.7 23.1 11.9 33.8 3.1 10.2-8.5 11.5-23.6 3.1-33.8C326 321.7 288.2 304 248 304z"
                stroke="none"
              />
            </svg>
          )}
          {sad === false && (
            <svg
              className={`noRowsRecords__size ${classNameSmile}`}
              stroke="currentColor"
              fill="currentColor"
              strokeWidth={0}
              viewBox="0 0 496 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
              data-testid="happyFace"
              role="figure"
              aria-label="happyface Image"
            >
              <path
                d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 448c-110.3 0-200-89.7-200-200S137.7 56 248 56s200 89.7 200 200-89.7 200-200 200zm-80-216c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32zm160 0c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32zm4 72.6c-20.8 25-51.5 39.4-84 39.4s-63.2-14.3-84-39.4c-8.5-10.2-23.7-11.5-33.8-3.1-10.2 8.5-11.5 23.6-3.1 33.8 30 36 74.1 56.6 120.9 56.6s90.9-20.6 120.9-56.6c8.5-10.2 7.1-25.3-3.1-33.8-10.1-8.4-25.3-7.1-33.8 3.1z"
                stroke="none"
              />
            </svg>
          )}
        </div>
        {(message1 || message2) && (
          <div className={'noRowsRecords__text'}>
            {message1 && <p tabIndex={0}>{message1}</p>}
            {message2 && (
              <p className={'noRowsRecords__boldText'} tabIndex={0}>
                {message2}
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
