import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import HomePage from '@pages/HomePage';

let response;

Given('o carrinho está vazio', () => {
  HomePage.limparCarrinho();
});

When('eu adiciono um produto via API', function () {
  cy.fixture('bodyCarrinhoValido').then((body) => {
    cy.request({
      method: 'POST',
      url: '/api/carrinho',
      headers: {
        accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: body
    }).then((res) => {
      response = res;
    });
  });
});

When('tento adicionar um produto via API sem body', () => {
  cy.request({
    method: 'POST',
    url: '/api/carrinho',
    headers: {
      accept: 'application/json',
      'Content-Type': 'application/json'
    }
  }).then((res) => {
    response = res;
  });
});

Then('retornará status {int}', (status) => {
  expect(response.status).to.eq(status);
});


Then('apresentará a mensagem {string}', (mensagem) => {
  expect(response.body).to.have.property('message').to.eq(mensagem);
});
