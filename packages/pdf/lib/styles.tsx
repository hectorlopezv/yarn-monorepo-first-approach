import styled, {css} from 'styled-components'
import {
  CloseIcon,
  LeftIcon,
  RightIcon,
  PlusIcon,
  MinusIcon,
  DoubleLeftIcon,
  DoubleRightIcon,
} from './icons'
export const Close = styled(CloseIcon)`
  &:hover {
    color: #e60000c4 !important;
  }
`
interface ContainerTypes {
  showtoolbar: boolean
}
export const Container = styled.div<ContainerTypes>`
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: 5;
  text-align: center;
  min-height: 900px;
  ${({showtoolbar}) =>
    showtoolbar
      ? css`
          background-color: rgb(40, 44, 52);
        `
      : css`
          background-color: transparent;
        `}
  flex-direction: column;
  font-size: calc(10px + 1.45vmin);
  color: white;

  border-radius: 4px;
  display: flex;
  -webkit-box-pack: start;
  justify-content: flex-start;
  -webkit-box-align: center;
  align-items: center;
  margin-top: 4px;
  padding-bottom: 39px;

  width: 100%;
`

export const Inner = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
`
export const Frame = styled.iframe`
  width: 100%;
  height: 100%;
  visibility: hidden;
  position: absolute;
`

export const Toolbar = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 96%;
  align-items: center;
  background-color: white;
  margin: 15px 0;
  padding: 5px 10px;
  border-radius: 3px;
  max-width: 640px;
  & > svg {
    font-size: 23px;
    color: rgb(40, 44, 52);
    //margin: 0 10px;
    cursor: pointer;
    &:hover {
      color: rgb(255, 102, 0);
    }
  }
`
export const ToolbarInner = styled.div``
export const Span = styled.span`
  color: rgb(40, 44, 52);
`
export const Input = styled.input`
  color: rgb(40, 44, 52);
`
interface PlusTypes {
  zoominclass: boolean
  disabledzoomin: boolean | number
}
export const Plus = styled(PlusIcon)<PlusTypes>`
  &&& {
    ${({zoominclass, disabledzoomin}) =>
      (zoominclass || disabledzoomin) &&
      css`
        cursor: not-allowed;
        &:hover {
          color: black;
        }
      `}
  }
`
interface MinusTypes {
  zoomoutclass: boolean
}
export const Minus = styled(MinusIcon)<MinusTypes>`
  &&& {
    ${({zoomoutclass}) =>
      zoomoutclass &&
      css`
        cursor: not-allowed;
        &:hover {
          color: black;
        }
      `}
  }
`
interface lastpageInterface {
  lastpageclass: string
}
export const LastPageX = styled(DoubleRightIcon)<lastpageInterface>``

interface FirstPageXInterface {
  firstpageclass: string
}
export const FirstPageX = styled(DoubleLeftIcon)<FirstPageXInterface>``

interface LeftTypes {
  firstpageclass: boolean
}
export const Left = styled(LeftIcon)<LeftTypes>`
  &&& {
    ${({firstpageclass}) =>
      firstpageclass &&
      css`
        cursor: not-allowed;
        &:hover {
          color: black;
        }
      `}
  }
`

interface RigthTypes {
  lastpageclass: boolean
}
export const Right = styled(RightIcon)<RigthTypes>`
  &&& {
    ${({lastpageclass}) =>
      lastpageclass &&
      css`
        cursor: not-allowed;
        &:hover {
          color: black;
        }
      `}
  }
`
