import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';


Given('que esteja no checkout com um produto', () => {
  
  cy.request({
      method: 'DELETE',
      url: '/api/carrinho/1',
      headers: {
        accept: 'application/json',
      },
    });

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
  
cy.visit('/checkout.html');

});

When('clicar no botão {string}', (botao) => {
  cy.contains(botao).click();
});

When('clicar no link {string}', (textoDoLink) => {
  cy.contains(textoDoLink).click();
});

When("preencher todos os dados para entrega", () => {

  cy.get('#first-name').type('Guilherme');
  cy.get('#last-name').type('Test');
  cy.get('#address').type('Rua dos Bobos');
  cy.get('#number').type('10');
  cy.get('#cep').type('04547006');
  cy.get('#phone').type('11987654321');

  const randomEmail = `guilherme${Date.now()}@test.com`;
  cy.get('#email').type(randomEmail);
    
});

When("selecionar a opção para cria uma nova conta", () => {
  cy.get('#create-account').click();
});

When("preencher os dados da senha", () => {
  cy.get('#password').type('@A123456')
  cy.get('#confirm-password').type('@A123456')
});  

When("selecionar {string}", (selecionar) => {
    cy.contains(selecionar).click();
});

When("selecionar a opção Termos e Condições", () => {
  cy.get('#terms').click();
});

When("preencher os dados do cartão", () => {
  cy.get('#card-number').type('1234123412341234');
  cy.get('#card-expiry').type('12/2027');
  cy.get('#card-cvc').type('123');
});

Then("apresentará a mensagem de agradecimento", () => {
  cy.get('h4').contains('OBRIGADO PELO SEU PEDIDO GUILHERME.', { matchCase: false });
  cy.get(':nth-child(3) > strong').contains('R$78.90');
  cy.get(':nth-child(4) > strong').contains('Pagamento aprovado');
  cy.get('#order-status > :nth-child(5)').contains('Agradecemos a sua preferência');
});

Then("apresentará a mensagem que todos os campos não foram preenchidos", () => {
  cy.get('#alert-container').contains('Por favor, preencha todos os campos obrigatório marcados com asteriscos!')
});


Then('abrirá a página {string} na nova aba {string}', (textoDoLink, urlEsperada) => {
  cy.contains('a', textoDoLink)
  .should('have.attr', 'href')
  .then((href) => {
      
      const baseUrl = Cypress.config('baseUrl');
      const urlCompleta = new URL(href, baseUrl).toString();

      expect(urlCompleta).to.eq(baseUrl+urlEsperada); 
    });

  cy.contains('a', textoDoLink).should('have.attr', 'target', '_blank');
});