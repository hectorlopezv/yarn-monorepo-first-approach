import React from 'react'
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface DownIconProps {
  className?: string
  onClick: any
  onKeyDown: any
}

export const DownIcon: React.FC<DownIconProps> = props => {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth={0}
      viewBox="0 0 512 512"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
      tabIndex={0}
      {...props}
    >
      <path
        d="M504 256c0 137-111 248-248 248S8 393 8 256 119 8 256 8s248 111 248 248zM273 369.9l135.5-135.5c9.4-9.4 9.4-24.6 0-33.9l-17-17c-9.4-9.4-24.6-9.4-33.9 0L256 285.1 154.4 183.5c-9.4-9.4-24.6-9.4-33.9 0l-17 17c-9.4 9.4-9.4 24.6 0 33.9L239 369.9c9.4 9.4 24.6 9.4 34 0z"
        stroke="none"
      />
    </svg>
  )
}
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface UpIconProps {
  className?: string
  onClick: any
  onKeyDown: any
}

export const UpIcon: React.FC<DownIconProps> = props => {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth={0}
      viewBox="0 0 512 512"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
      tabIndex={0}
      {...props}
    >
      <path
        d="M8 256C8 119 119 8 256 8s248 111 248 248-111 248-248 248S8 393 8 256zm231-113.9L103.5 277.6c-9.4 9.4-9.4 24.6 0 33.9l17 17c9.4 9.4 24.6 9.4 33.9 0L256 226.9l101.6 101.6c9.4 9.4 24.6 9.4 33.9 0l17-17c9.4-9.4 9.4-24.6 0-33.9L273 142.1c-9.4-9.4-24.6-9.4-34 0z"
        stroke="none"
      />
    </svg>
  )
}
