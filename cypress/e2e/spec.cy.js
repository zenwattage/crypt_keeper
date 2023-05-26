describe('spec.cy.js', () => {
  const testMessage = 'This is a test message';
  const testDecryptMessage = 'U2FsdGVkX18b+K5nPJDGNpAsyEX6cU0f7QW5z3fouNoje8s7SlyUt+XAeV7kiW2q';
  const testKey = 'testkey123';
  it('should visit', () => {
    cy.visit('http://localhost:3000/');

    cy.title().should('include', 'Crypt_Keeper');

    // check if KeyInput passwordAreaValue is empty
    cy.get('input[type="password"]').should('have.value', '');

    // Input testMessage into #encrypt_text
    cy.get('#encrypt_text').type(testMessage);

    // Input testKey into #encrypt_key
    cy.get('#encrypt_key').type(testKey);

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

    // check if #outputTextArea is not empty
    cy.get('#outputTextArea').should('not.be.empty');


    // Click the button with the class name 'resetButton'
    cy.get('.resetButton').click();

    // Input testDecryptMessage into #encrypt_text
    cy.get('#encrypt_text').type(testDecryptMessage);

    // Input testKey into #encrypt_key
    cy.get('#encrypt_key').type(testKey);

    // Click the button with the class name 'decryptButton'
    cy.get('.decryptButton').click();

    // check post request
    it('should send a POST request and validate the response', () => {
      // Send a POST request
      cy.request({
        method: 'POST',
        url: 'https://6z6enqjxl8.execute-api.us-west-2.amazonaws.com/decryption',
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
    }
    );

    // check if #outputTextArea is not empty
    cy.get('#outputTextArea').should('not.be.empty');

    // check if #outputTextArea is equal to testMessage
    cy.get('#outputTextArea').should('have.value', testMessage);

    // Click the button with the class name 'resetButton'
    cy.get('.resetButton').click();

    // Input testMessage into #encrypt_text
    cy.get('#encrypt_text').type(testMessage);

    // Click button with class name 'encryptButton'
    cy.get('.encryptButton').click();

    // #outputTextArea should display message "Invalid Key or No key provided."
    cy.get('#outputTextArea').should('have.value', 'Invalid Key or No key provided.');

    // Click the button with the class name 'resetButton'
    cy.get('.resetButton').click();

    // Input testDecryptMessage into #encrypt_text
    cy.get('#encrypt_text').type(testDecryptMessage);

    // Click button with class name 'decryptButton'
    cy.get('.decryptButton').click();

    // #outputTextArea should display message "Invalid Key or No key provided."
    cy.get('#outputTextArea').should('have.value', 'Invalid Key or No key provided.');

    // Click the button with the class name 'resetButton'
    cy.get('.resetButton').click();


  });
})