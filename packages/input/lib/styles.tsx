import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  @media screen and (max-width: 767px) {
    flex-flow: column;
    align-items: center;
  }
`
export const LabelContainer = styled.div`
  margin-right: 30px;
  flex: 0.38;
  text-align: right;
  @media screen and (max-width: 767px) {
    margin: 0 auto 0 auto;
    transform: translateX(-24%);
  }
`
export const Label = styled.p`
  &&& {
    text-align: right;
    margin-top: 10px;
    color: #212529;
    font: normal normal normal 14px/24px Roboto;
    @media screen and (max-width: 768px) {
      transform: translateX(-60px);
    }
  }
`
export const InputContainer = styled.div`
  &&& {
    padding-left: 12px;
    flex: 0.51;
    margin-bottom: 16px;
  }
`
export const Input = styled.input`
  &&&& {
    border-radius: 4px;
    border: 1px solid #ccc;
    height: 42px;
    text-align: left;
    font: normal normal normal 14px/24px Roboto;
    color: #808080;
    padding: 10px;
    width: 265px;
    @media screen and (max-width: 767px) {
      width: 232px;
    }
    ::-webkit-input-placeholder {
      /* Chrome/Opera/Safari */
      color: #808080;
    }
    ::-moz-placeholder {
      /* Firefox 19+ */
      color: #808080;
    }
    :-ms-input-placeholder {
      /* IE 10+ */
      color: #808080;
    }
    :-moz-placeholder {
      /* Firefox 18- */
      color: #808080;
    }
  }
`
