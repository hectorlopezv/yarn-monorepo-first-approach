import React from 'react'
import {render, screen} from '@testing-library/react'
import user from '@testing-library/user-event'
import {andres} from '@libprov/test'
describe('testing suite', () => {
  it('testing unit test1', () => {
    expect(andres(2)).toBe(2)
  })
})
