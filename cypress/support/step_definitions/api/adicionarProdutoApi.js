import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

let response;

Given('o carrinho está vazio', () => {
  cy.request('DELETE', 'http://localhost:3000/api/carrinho/1');
});

When('eu adiciono um produto via API', () => {
  cy.request({
    method: 'POST',
    url: 'http://localhost:3000/api/carrinho',
    headers: {
      accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: {
      userId: 1,
      productId: 1,
      quantity: 1
    }
  }).then((res) => {
    response = res;
  });
});

Then('a resposta deve indicar sucesso', () => {
  expect(response.status).to.eq(201);
  expect(response.body).to.have.property('message');
});
