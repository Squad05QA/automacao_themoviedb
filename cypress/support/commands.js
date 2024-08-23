Cypress.Commands.add('login', (usuario, senha) => {
    cy.visit('https://www.themoviedb.org/login');
    cy.get('input[name="username"]').type(usuario);
    cy.get('input[name="password"]').type(senha);
    cy.get('#login_button').click();
    cy.url().should('include', `/u/${usuario}`);
});

Cypress.Commands.add('iniciarProcessoNovoFilme', () => {
    cy.get('.new_icon > .glyphicons_v2').click();
    cy.get('a[href="/movie/new"]').first().click();
});

Cypress.Commands.add('preencherDetalhesDoFilme', (titulo, sinopse) => {
    cy.get('a[href="#next"][role="menuitem"]').first().click();
    cy.get('#original_title').should('be.visible').type(titulo);
    cy.get('#overview').type(sinopse);
    cy.get('a[href="#next"][role="menuitem"]').first().click();
});
