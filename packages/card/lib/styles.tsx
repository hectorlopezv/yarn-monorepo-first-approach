import styled from 'styled-components'
import {Link as LinkR} from 'react-router-dom'
interface TitleProps {
  tabIndex: number
}

export const Card = styled.div.attrs<TitleProps>(prop => ({
  tabindex: prop.tabIndex,
}))`
  width: 270px;
  height: 154px;
  align-items: center;
  justify-content: center;
  border: 1px solid #cccccc;
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #cccccc;
  border-radius: 10px;
  display: flex;
  flex-flow: column;

  &::first-child {
    font: normal normal normal 36px/24px FontAwesome;
    color: black;
  }
`

export const Link = styled(LinkR)`
  margin-top: 15px;
  text-align: center;
  font: normal normal 300 12px/14px Roboto;
  letter-spacing: 0px;
  color: #ff6600;
  text-decoration: none;

  &:active,
  &:hover {
    outline: 0;
    text-decoration: none;
  }
`
export const Title = styled.span.attrs<TitleProps>(prop => ({
  tabindex: prop.tabIndex,
}))`
  margin-top: 11px;
  text-align: center;
  font: normal normal normal 14px/16px Roboto !important;
  letter-spacing: 0px;
  color: #000000;
`
