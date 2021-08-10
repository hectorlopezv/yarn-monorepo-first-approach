import React from 'react'
import {render, screen} from '@testing-library/react'
import {Loader} from '@libprov/loader/lib/loader'
describe('testing suite', () => {
  it('testing unit Loader', () => {
    const {rerender} = render(<Loader loading={true} noBack={true} />)
    expect(screen.getByTestId('spinningLoader')).toBeInTheDocument()
    rerender(<Loader loading={false} noBack={false} />)
    expect(screen.queryByTestId('spinningLoader')).toBeNull()
  })
})
