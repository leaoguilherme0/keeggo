class CheckoutPage {
    visitarCheckout() {
      cy.visit('/checkout.html');
    }
  

  
    adicionarProduto(body) {
      return cy.request({
        method: 'POST',
        url: '/api/carrinho',
        headers: {
          accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body
      });
    }
  
    clicarBotao(botao) {
      cy.contains(botao).click();
    }
  
    clicarLink(textoDoLink) {
      cy.contains(textoDoLink).click();
    }
  
    preencherEndereco() {
      cy.get('#first-name').type('Guilherme');
      cy.get('#last-name').type('Test');
      cy.get('#address').type('Rua dos Bobos');
      cy.get('#number').type('10');
      cy.get('#cep').type('04547006');
      cy.get('#phone').type('11987654321');
      const randomEmail = `guilherme${Date.now()}@test.com`;
      cy.get('#email').type(randomEmail);
    }
  
    selecionarCriarConta() {
      cy.get('#create-account').click();
    }
  
    preencherSenha() {
      cy.get('#password').type('@A123456');
      cy.get('#confirm-password').type('@A123456');
    }
  
    selecionarOpcao(texto) {
      cy.contains(texto).click();
    }
  
    aceitarTermos() {
      cy.get('#terms').click();
    }
  
    preencherCartao() {
      cy.get('#card-number').type('1234123412341234');
      cy.get('#card-expiry').type('12/2027');
      cy.get('#card-cvc').type('123');
    }
  
    validarMensagemAgradecimento() {
      cy.get('h4').contains('OBRIGADO PELO SEU PEDIDO GUILHERME.', { matchCase: false });
      cy.get(':nth-child(3) > strong').contains('R$78.90');
      cy.get(':nth-child(4) > strong').contains('Pagamento aprovado');
      cy.get('#order-status > :nth-child(5)').contains('Agradecemos a sua preferência');
    }
  
    validarCamposObrigatorios() {
      cy.get('#alert-container').contains('Por favor, preencha todos os campos obrigatório marcados com asteriscos!');
    }
  
    validarLinkNovaAba(textoDoLink, urlEsperada) {
      cy.contains('a', textoDoLink)
        .should('have.attr', 'href')
        .then((href) => {
          const baseUrl = Cypress.config('baseUrl');
          const urlCompleta = new URL(href, baseUrl).toString();
          expect(urlCompleta).to.eq(baseUrl + urlEsperada);
        });
  
      cy.contains('a', textoDoLink).should('have.attr', 'target', '_blank');
    }
  }
  
  export default new CheckoutPage();
  