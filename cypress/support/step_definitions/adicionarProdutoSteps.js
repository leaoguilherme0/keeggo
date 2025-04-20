import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

Given('que esteja na home do QA Commerce sem nenhum produto no carrinho', () => {
  
  cy.request({
    method: 'DELETE',
    url: '/api/carrinho/1',
    headers: {
      accept: 'application/json',
    },
  });
  
  cy.visit('/');
});

When('clicar no botão Adicionar ao carrinho do primeiro produto apresentado', () => {
  cy.get(':nth-child(1) > .card > .card-body > .btn').click();
});


Then('apresentará a mensagem Produto adicionado ao carrinho', () => {
  cy.get('#alert-container').should(($alert) => {
    const alertIsVisible = $alert.is(':visible');
    const alertText = $alert.text();
    expect(alertIsVisible).to.be.true;
    expect(alertText).to.include('Produto adicionado ao carrinho');
  });

  cy.get('#alert-container').should('not.be.visible');
});

Then('em cima do carrinho aparece o total de {string} produto', (mensagem) => { 
  cy.get('#cart-count').should('be.visible').contains(mensagem, { matchCase: false });
}); 

