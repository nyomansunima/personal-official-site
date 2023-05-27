describe('View one blog', () => {
  it('Visit the blog', () => {
    cy.visit(`${Cypress.env('host')}`)
  })
})
