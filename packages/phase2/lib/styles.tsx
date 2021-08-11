import styled, {css} from 'styled-components'

export const Container = styled.div`
  background: #f9f9f9 0% 0% no-repeat padding-box;
  border: 1px solid #ccc;
  padding: 0;
  border-radius: 10px;
  position: relative;
  min-height: 200px;
  background: #f4f4f4;
  display: block;
  margin: 40px 0px 0px;
  padding: 0;
  @media screen and (max-width: 767px) {
    margin: 70px 0px 0px;
  }
`

export interface labelInterfacetype {
  phase: number
}
export const Label = styled.span<labelInterfacetype>`
  position: absolute;
  top: -36.5px;
  left: 50%;
  transform: translateX(-50%);
  width: 73px;
  height: 73px;
  display: block;
  background: #e5e5e5;
  border: 5px solid #f4f4f4;
  text-align: center;
  line-height: 63px;
  font-size: 36px;
  font-family: 'Roboto Bold';
  color: #777;
  border-radius: 100%;
  @media screen and (min-width: 768px) {
    top: 15px;
    left: -36.5px;
    transform: translateX(0);
  }
  ${({phase}) =>
    phase === 2 &&
    css`
      border: none;
      background: #f60;
      line-height: 73px;
      color: #fff;
    `}
`

interface numberContaineProps {
  'data-testid': string
  tabIndex: number
  'aria-label': string
}
export const Inner = styled.div.attrs<numberContaineProps>(prop => ({
  tabindex: prop.tabIndex,
  'data-testid': prop['data-testid'],
  'aria-label': prop['aria-label'],
}))`
  border-radius: 10px;
  background: #ffffff 0% 0% no-repeat padding-box;
`
