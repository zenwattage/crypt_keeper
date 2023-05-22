
describe('Main component', () => {
    it('should encrypt the message when Encrypt button is clicked', () => {
        const testMessage = 'This is a test message';
        const testDecryptMessage = 'U2FsdGVkX18b+K5nPJDGNpAsyEX6cU0f7QW5z3fouNoje8s7SlyUt+XAeV7kiW2q';
        const testKey = 'testkey123';


        cy.visit('http://localhost:3000/'); // Assuming the component is rendered at the root URL

        // Enter the test message in the TextArea
        cy.get('#encrypt_text').type(testMessage);

        // Enter the test key in the KeyInput
        cy.get('#encrypt_key').type(testKey);

        // Click the Encrypt button
        cy.get('#encryptButton').click();

        // Verify that the output is displayed
        cy.get('textarea[name="#outputTextArea"]').should('not.be.empty');

        // Click the Reset button
        cy.get('#resetButton').click();
        cy.get('#resetButton').click();

        // #encrypt_text & #encrypt_key & #outputTextArea should be empty
        cy.get('#encrypt_text').should('be.empty');
        cy.get('#encrypt_key').should('be.empty');
        // cy.get('textarea[name="#outputTextArea"]').should('be.empty');

        // Enter the testDecryptMessage in the #encrypt_text
        cy.get('#encrypt_text').type(testDecryptMessage);

        // Enter the test key in the KeyInput
        cy.get('#encrypt_key').type(testKey);

        // Click the Decrypt button
        cy.get('#decryptButton').click();

        // Verify that the output is displayed
        cy.get('textarea[name="#outputTextArea"]').should('not.be.empty');

        // Compare the output with the test message
        cy.get('textarea[name="#outputTextArea"]').should('have.value', testMessage);



    });
});