import styled from 'styled-components/macro'
import {FaTimes} from 'react-icons/fa'
export const Container = styled.div`
  position: absolute;
  z-index: 4;
  width: 105%;
  height: 100%;
  top: 0;
  left: 0;
  transform: translateX(-4%);
`

export const Btn = styled.div`
  background: red;
  color: blue;
  position: relative;
  z-index: 10;
`
export const PdfEmb = styled.embed``
export const Frame = styled.iframe`
  width: 100%;
  height: 100%;
`

export const Icon = styled(FaTimes)`
  color: #bb4945;
  position: absolute;
  bottom: top;
  right: 3%;
  top: 10.3%;
  font-size: 29px;
`
