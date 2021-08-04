import styled from 'styled-components'
import {FaFileArchive} from 'react-icons/fa'
import {Buttons_SC} from '@libprov/buttons'
export const Container = styled.div`
  display: flex;
  align-items: baseline;
  margin-top: 20px;

  @media screen and (max-width: 767px) {
    flex-flow: column;
    align-items: center;
    margin-top: -6px;
    margin-bottom: 13px;
  }
`

export const Inner = styled.div`
  display: flex;
  align-items: center;
  //margin-left: 34px;
  margin-bottom: 10.6px;
  align-self: flex-end;
  margin-bottom: 17.5px;
  @media screen and (max-width: 767px) {
    flex-flow: column;
    margin: 0;
    margin-top: 22px;
    align-self: center;
    margin-bottom: 15px;
  }
`

export const IconFile = styled(FaFileArchive)`
  //margin-left: 29px;
  font-size: 24px;
  @media screen and (max-width: 767px) {
    margin-left: 0px;
    margin-top: 0px;
  }
`
export const Label = styled.span`
  margin-left: 7px;
  font: normal normal 300 14px/16px Roboto;

  @media screen and (max-width: 767px) {
    margin-left: 0px;
    margin-top: 5px;
  }
`
export const Button = styled(Buttons_SC)`
  &&& {
    margin-left: auto;
    border: none;
    width: unset;
    /* margin-right: 43px; */
    padding: 0;
    margin-right: 13px;
    @media screen and (max-width: 767px) {
      margin-left: 0px;
      margin: 0;
      margin-right: 5px;
    }
  }
`

export const ContainerEl = styled.div`
  &&& {
    margin-left: 56px;
    margin-top: 30px;
    margin-right: 19px;
    @media screen and (max-width: 768px) {
      margin-top: 56px;
      margin-left: 0;
      margin-right: 0px;
      text-align: center;
      padding: 0 16px;
    }
  }
`
export const TitleZipper = styled.h3`
  &&& {
    font: normal normal normal 17.6px/21px Roboto;
    letter-spacing: 0px;
    color: #999999;
  }
`
