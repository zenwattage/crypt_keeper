
describe('Main component', () => {
    it('should encrypt the message when Encrypt button is clicked', () => {
        const testMessage = 'This is a test message';
        const testKey = 'testkey123';

        cy.visit('http://localhost:3000/'); // Assuming the component is rendered at the root URL

        // Enter the test message in the TextArea
        cy.get('#encrypt_text').type(testMessage);

        // Enter the test key in the KeyInput
        cy.get('#encrypt_key').type(testKey);

        // Click the Encrypt button
        cy.get('#encryptButton').click();

        // Verify that the output is displayed
        cy.get('textarea[name="outputTextArea"]').should('not.be.empty');
    });
});