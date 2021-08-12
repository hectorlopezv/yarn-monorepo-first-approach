import React from 'react'
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface LeftIconProps {
  onClick: any
  firstpageclass: any
}

const LeftIcon: React.FC<LeftIconProps> = props => {
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
        d="M192 127.338v257.324c0 17.818-21.543 26.741-34.142 14.142L29.196 270.142c-7.81-7.81-7.81-20.474 0-28.284l128.662-128.662c12.599-12.6 34.142-3.676 34.142 14.142z"
        stroke="none"
      />
    </svg>
  )
}

export default LeftIcon
