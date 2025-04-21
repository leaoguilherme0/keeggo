class HomePage {
    visitarHome() {
      cy.visit('/');
    }
  
    limparCarrinho() {
      cy.request('DELETE', '/api/carrinho/1', {
        headers: { accept: 'application/json' },
      });
    }
  
    adicionarPrimeiroProduto() {
      cy.get(':nth-child(1) > .card > .card-body > .btn').click();
    }
  
    adicionarSegundoProduto() {
      cy.get(':nth-child(2) > .card > .card-body > .btn').click();
    }
  
    validarMensagemProdutoAdicionado() {
      cy.get('#alert-container').should(($alert) => {
        const alertIsVisible = $alert.is(':visible');
        const alertText = $alert.text();
        expect(alertIsVisible).to.be.true;
        expect(alertText).to.include('Produto adicionado ao carrinho');
      });
  
      cy.get('#alert-container').should('not.be.visible');
    }
  
    validarTotalCarrinho(mensagem) {
      cy.get('#cart-count').should('be.visible').contains(mensagem, { matchCase: false });
    }
  
    validarRedirecionamentoParaCarrinho() {
      cy.url().should('include', '/cart.html');
    }

    validarProdutoNoCarrinho() {
      cy.get('#cart-list').should('be.visible');
    }
  }
  
  export default new HomePage();
  