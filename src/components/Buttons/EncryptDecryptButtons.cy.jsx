import React from 'react'
import EncryptDecryptButtons from './EncryptDecryptButtons'

describe('<EncryptDecryptButtons />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<EncryptDecryptButtons />)
  })
})