import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

Given('que esteja no carrinho com um produto', () => {
  
    cy.request({
        method: 'DELETE',
        url: 'http://localhost:3000/api/carrinho/1',
        headers: {
          accept: 'application/json',
        },
      });

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
  
  cy.visit('/cart.html');
});

When('clicar no botão {string}', (botao) => {
    //cy.get('#totals > .btn').click();
    cy.contains(botao).click();

});


When("preencher todos os dados do cliente", () => {

    cy.get('#first-name').type('Guilherme');
    cy.get('#last-name').type('Test');
    cy.get('#address').type('Rua dos Bobos');
    cy.get('#number').type('10');
    cy.get('#cep').type('04547006');
    cy.get('#phone').type('11987654321');

    const randomEmail = `guilherme${Date.now()}@test.com`;
    cy.get('#email').type(randomEmail);

    cy.get('#create-account').click();
    cy.get('#password').type('@A123456')
    cy.get('#confirm-password').type('@A123456')

    cy.get('#payment-boleto').click();
    cy.get('#terms').click();
    
  });


  Then("apresentará a mensagem de agradecimento", () => {
    cy.get('h4').contains('OBRIGADO PELO SEU PEDIDO GUILHERME.', { matchCase: false });
    cy.get(':nth-child(3) > strong').contains('R$19.90');
    cy.get(':nth-child(4) > strong').contains('Pagamento aprovado');
    cy.get('#order-status > :nth-child(5)').contains('Agradecemos a sua preferência');
});

Then("apresentará a mensagem que todos os campos não foram preenchidos", () => {
    cy.get('#alert-container').contains('Por favor, preencha todos os campos obrigatório marcados com asteriscos!')
});