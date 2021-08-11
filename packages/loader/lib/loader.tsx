import React from 'react'
import {Container, Spin, Text} from './styles'
export interface Loader {
  loading: boolean | 0 | 1
  noBack?: boolean | 0 | 1
}

export const Loader: React.FC<Loader> = ({loading, noBack = false}) => {
  return (
    <>
      {loading && (
        <Container loading={loading} noBack={noBack}>
          <Spin data-testid="spinningLoader">
            <Text>cargando... </Text>
          </Spin>
        </Container>
      )}
    </>
  )
}
