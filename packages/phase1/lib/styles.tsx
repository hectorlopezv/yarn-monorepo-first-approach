import styled, {css} from 'styled-components'
interface typeContainer {
  phase: number
}
export const Container = styled.div<typeContainer>`
  &&&& {
    margin: 20px 0px 0px;
    background: #fff 0% 0% no-repeat padding-box;
    border: 1px solid #f60;
    border-radius: 10px;
    min-height: 200px;
    position: relative;
    border-color: #ccc;
    ${({phase}) => (phase === 2 ? 'border-color: #ccc' : 'border-color: #f60')}
  }
  padding-top: 30px;
`
interface numberContaineProps {
  'data-testid': string
  tabIndex: number
  'aria-label': string
}
export const NumberContainer = styled.div.attrs<numberContaineProps>(prop => ({
  tabindex: prop.tabIndex,
  'data-testid': prop['data-testid'],
  'aria-label': prop['aria-label'],
}))`
  position: relative;
  display: block;
  min-height: 1px;
  padding: 1px;
`
interface digitTypes {
  phase: number
}
export const Digit = styled.span<digitTypes>`
  border: none;
  background: #f60;
  line-height: 73px;
  color: #fff;
  position: absolute;
  top: -36.5px;
  left: 50%;
  transform: translateX(-50%);
  width: 73px;
  height: 73px;
  display: block;

  border: 1px solid #f4f4f4;
  text-align: center;
  line-height: 73px;
  font-size: 36px;
  font-family: 'Roboto Bold';
  border-radius: 100%;

  ${({phase}) => {
    if (phase === 2) {
      return css`
        border: none;
        background: #81ba00;
        line-height: 73px;
        color: #fff;
        font-size: 0%;
        &::before {
          font-family: 'FontAwesome';
          content: '\f00c';
          font-size: 40px;
        }
      `
    }
    return css``
  }}

  @media screen and (device-width: 767px) {
    top: -67.5px;
  }
  @media screen and (max-width: 767px) {
    top: -67.5px;
    transform: translateX(-59%);
  }
  @media screen and (min-width: 768px) {
    top: 15px;
    left: -36.5px;
    transform: translateX(0);
  }
`
