import styled, {keyframes, css} from 'styled-components'
export const animationFrame = keyframes`
0% {

            transform: rotate(0deg); 
}
  100% {

            transform: rotate(360deg); 
}
`

interface Container {
  loading: boolean | 0 | 1
  noBack?: boolean | 0 | 1
}
export const Container = styled.div<Container>`
  ${({noBack}) =>
    noBack
      ? css`
          background-color: transparent;
        `
      : css`
          background-color: rgba(255, 255, 255, 0.85);
        `}

  width: 103%;
  z-index: 3;
  margin-left: -23px;
  height: 100%;
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  ${({loading}) =>
    loading &&
    css`
      display: block;
    `}
`
interface spinProps {
  'data-testid'?: string
}
export const Spin = styled.div.attrs<spinProps>(prop => ({
  'data-testid': prop['data-testid'],
}))`
  border-radius: 50%;
  color: #f60;
  font-size: 11px;
  text-indent: -999px;
  margin: auto auto;
  position: relative;
  width: 50px;
  height: 50px;
  box-shadow: inset 0 0 0 6px;
  transform: translateZ(0);
  top: 50%;
  margin-top: -25px;
  &:before,
  &:after {
    position: absolute;
    content: '';
    width: 27px;
    height: 52px;
    background-color: #fff;
  }

  &:before {
    border-radius: 50px 0 0 50px;
    top: -1px;
    left: -1px;
    transform-origin: 27px 26px;
    animation: ${animationFrame} 2s infinite ease 1.5s;
  }
  &:after {
    border-radius: 0 50px 50px 0;
    top: -1px;
    right: -1px;
    transform-origin: 1px 26px;
    animation: ${animationFrame} 2s infinite ease;
  }
`

export const Text = styled.span`
  display: block;
  overflow: hidden;
  text-indent: -999px;
  width: 100%;
`
