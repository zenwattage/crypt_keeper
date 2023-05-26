import React from 'react'
import EncryptButton from './EncryptButton'

describe('<EncryptButton />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<EncryptButton />)
  })
})