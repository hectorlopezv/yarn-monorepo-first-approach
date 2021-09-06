import styled, {css} from 'styled-components'

export interface labelContainerTypes {
  condition: boolean
}
export const LabelContainer = styled.div<labelContainerTypes>`
  margin-right: 30px;

  text-align: right;
  flex: 0.376;
  transform: translateX(1px);
  position: relative;
  justify-content: end;

  @media screen and (device-width: 767px) {
  }
  @media screen and (max-width: 766px) {
    transform: translateX(-59%);

    ${({condition}) =>
      condition &&
      css`
        transform: translateX(-97%);
      `}
    margin: 0px auto;
  }
`
export interface ContainerStyles {
  className: string
}
export const Container = styled.div.attrs<ContainerStyles>(prop => ({
  className: prop.className,
}))`
  display: flex;
  align-items: flex-start;

  width: 100%;
  justify-content: center;

  @media screen and (max-width: 766px) {
    flex-flow: column;
    align-items: center;
    margin-bottom: 15px;
  }
`

export const Label = styled.p`
  &&& {
    text-align: right;
    margin-top: 10px;
    color: #212529;
    font: normal normal normal 14px/24px Roboto;
  }
`
export const DateContainer = styled.div`
  &&& {
    padding-left: 12px;
    flex: 0.518;
    transform: translateX(1%);
    @media screen and (device-width: 766px) {
      transform: translateX(-1.6%);
      margin-bottom: 15px;
    }
    @media screen and (min-width: 767px) {
      margin-bottom: 15px;
    }
  }
`
