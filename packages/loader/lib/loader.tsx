import React from 'react'
import {Container, Spin, Text} from './styles'
export interface Loader {
  loading: boolean
  noBack?: boolean
}

export const Loader: React.FC<Loader> = ({loading, noBack = false}) => {
  return (
    <>
      {loading && (
        <Container loading={loading} noBack={noBack}>
          <Spin>
            <Text>cargando... </Text>
          </Spin>
        </Container>
      )}
    </>
  )
}
