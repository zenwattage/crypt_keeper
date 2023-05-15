describe('spec.cy.js', () => {
  it('should visit', () => {
    cy.visit('http://localhost:3000/');

    cy.title().should('include', 'Crypt_Keeper');

    // check if KeyInput passwordAreaValue is empty
    cy.get('input[type="password"]').should('have.value', '');

    // Click the button with the class name 'encryptButton'
    cy.get('.encryptButton').click();

    // check post request
    it('should send a POST request and validate the response', () => {
      // Send a POST request
      cy.request({
        method: 'POST',
        url: 'https://6z6enqjxl8.execute-api.us-west-2.amazonaws.com/encryption',
        body: {
          //message: textAreaValue, key: passwordAreaValue
          message: 'textAreaValue',
          key: 'passwordAreaValue'
        }
      }).then((response) => {
        // Validate the response status code
        expect(response.status).to.eq(200);

        // Validate the response body or other properties as needed
        expect(response.body).to.have.property('success', true);
        expect(response.body).to.have.property('message', 'Request processed successfully');
      });
    });






  });
})