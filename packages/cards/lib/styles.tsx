import styled from 'styled-components'
interface CardContainerTypes {
  classExtra?: string
}
export const CardsContainer = styled.div.attrs<CardContainerTypes>(prop => ({
  className: prop.classExtra,
}))<CardContainerTypes>`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: start;
  padding-top: 30px;

  background: #f9f9f9 0% 0% no-repeat padding-box;
  border-radius: 10px;
  width: 100%;
  height: fit-content;
  margin: 30px 0px;
`

export const TitleContainer = styled.div.attrs(prop => ({
  className: prop.className,
}))`
  border-bottom: 1px dashed #ccc;
  width: 100%;
  margin-bottom: 30px;
`
export const Title = styled.h2.attrs(prop => ({
  className: prop.className,
}))`
  &&&& {
    text-align: left;
    margin-left: 30px;
    font: normal normal normal 18px/21px Roboto !important;
    @media screen and (max-width: 902px) {
      margin-left: 0px;
    }
  }
`
export const ChildrenContainer = styled.div.attrs(prop => ({
  className: prop.className,
}))`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 3px;
  margin-bottom: 74px;
  > *:first-child {
    margin-right: 30px;
  }
  @media screen and (max-width: 902px) {
    > *:first-child {
      margin-right: 0px;
      margin-bottom: 15px;
    }
    display: flex;
    flex-flow: column;
    align-items: center;
  }
`
