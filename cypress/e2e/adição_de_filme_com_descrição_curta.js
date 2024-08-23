describe('Adicionar novo filme', () => {
  it('Fazer login e iniciar o processo de criação de um novo filme', () => {
    cy.login('qateste', '1234');
    cy.iniciarProcessoNovoFilme();
    cy.preencherDetalhesDoFilme('Filme de Teste', 'Curta');
  });
});
