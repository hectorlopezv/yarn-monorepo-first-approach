import styled from 'styled-components'

export const Container = styled.div`
  border-top: 1px dashed #ccc;
  padding-top: 2em;
  padding-bottom: 2em;
  display: flex;
  align-items: baseline;
  justify-content: center;
  width: 100%;
  margin-top: 25px;
  @media screen and (max-width: 767px) {
    flex-flow: column-reverse nowrap;
    align-items: center;
    padding-bottom: 1.5em;
    padding-top: 2.3em;
    margin-top: 50px;
  }
`

export const Limpiar = styled.input`
  &&& {
    font: normal normal 300 14px/16px Roboto;
    text-align: center;
    background-color: transparent;
    color: #ff6600ba;
    text-transform: uppercase;
    padding: 5px 10px;
    text-align: center;
    border: none;
    @media screen and (max-width: 767px) {
      margin-left: 0px;
    }

    &:disabled {
      background: transparent;
      border: none;
      color: #7779;
      cursor: not-allowed;
    }
  }
`

export const Generate = styled.input`
  &&& {
    transition: background-color 0.2s ease-out;
    padding: 10px 14px 11px 14px;
    font: normal normal bold 14px/16px Roboto;
    letter-spacing: 0px;
    border-radius: 5px;
    text-align: center;
    background-color: #f60;
    border-color: transparent;
    color: #fff;

    &:disabled {
      opacity: 1;
      color: #999;
      background-color: #e5e5e5;
      border: solid 1px #ccc;
      cursor: not-allowed;
      &:hover {
        background-color: #e5e5e5;
      }
    }
    &:hover {
      background: #777;
    }
    @media screen and (min-width: 359px) {
      margin-bottom: 12px;
    }
  }
`
