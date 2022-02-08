describe('Factory', () => {
  it('Visits the initial project page', () => {
    cy.visit('/');
    cy.contains('Factory');
  });

  it('Visits the Factory page', () => {
    cy.visit('/factory');
    cy.contains('Factory');
  });
});
