import React from 'react'
import {render, screen} from '@testing-library/react'
import user from '@testing-library/user-event'

import {Smilef} from '@libProv/smilef/lib/smilef'
describe('testing suite', () => {
  it('testing unit test1', () => {
    const {debug} = render(<Smilef sad title="hector" />)
    debug()
    expect(screen.queryByText('hector')).toHaveTextContent('hector')
  })
})
