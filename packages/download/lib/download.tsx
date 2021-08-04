import React from 'react'

import {
  TitleZipper,
  ContainerEl,
  Container,
  IconFile,
  Label,
  Button,
  Inner,
} from './styles'
export interface DownloadProps {
  messageZipPart1: string
  messageZipPart2: string
  querySickLeaves: (...args: any[]) => any
  disabled: boolean
  filename: string
  btnMessage: string
}

export const Download: React.FC<DownloadProps> = ({
  querySickLeaves = () => console.log('hello excel'),
  disabled = false,
  filename = 'Nombre del reporte.xlsx',
  btnMessage = 'Descargar',
  messageZipPart1,
  messageZipPart2,
}) => {
  return (
    <>
      <ContainerEl>
        <TitleZipper>{`${messageZipPart1} ${messageZipPart2}`}</TitleZipper>

        <Container>
          <Inner>
            <IconFile />
            <Label>{filename}</Label>
          </Inner>
          <Button
            className="provedores__buttonsGenerar"
            generateMessage={btnMessage}
            querySickLeaves={querySickLeaves}
            disableGenerate={disabled}
            show={[false, true]}
          />
        </Container>
      </ContainerEl>
    </>
  )
}
