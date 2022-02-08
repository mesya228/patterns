describe('Memento', () => {
  it('Visits the Memento page', () => {
    cy.visit('/memento');
    cy.get('h2').contains('Memento');
  });

  it('Input values in input', () => {
    cy.get('input').type('T');
    cy.wait(500);
    cy.get('input').type('e');
    cy.wait(500);
    cy.get('input').type('s');
    cy.wait(500);
    cy.get('input').type('t');
    cy.wait(500);

    cy.get('input').should('have.value', 'Test');

    cy.get('button').click();
    cy.get('input').should('have.value', 'Tes');

    cy.get('button').click();
    cy.get('input').should('have.value', 'Te');

    cy.get('button').click();
    cy.get('input').should('have.value', 'T');

    cy.get('button').click();
    cy.get('input').should('have.value', '');
  });
});
