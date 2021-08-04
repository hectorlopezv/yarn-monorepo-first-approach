import React from 'react'
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface RightIconProps {
  onClick: any
  lastPageClass: any
}

const RightIcon: React.FC<RightIconProps> = props => {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth={0}
      viewBox="0 0 192 512"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128.662 128.662c7.81 7.81 7.81 20.474 0 28.284L34.142 398.804C21.543 411.404 0 402.48 0 384.662z"
        stroke="none"
      />
    </svg>
  )
}

export default RightIcon
