import React from 'react'
import {render, screen} from '@testing-library/react'
import user from '@testing-library/user-event'

import {Alertf} from '@libprov/alertf/lib/alertf'
describe('testing suite', () => {
  it('testing unit test1', () => {
    const {debug, rerender} = render(<Alertf mensaje="hector" />)

    render(<Alertf mensaje="hector" type="info" />)
    render(<Alertf mensaje="hector" type="success" />)
    render(<Alertf mensaje="hector" type="warning" />)
    render(<Alertf mensaje="hector" type="danger" />)
    debug()
    expect(screen.queryAllByText('hector')).toHaveLength(5)
  })
})
