Feature: Checkout Simples

  Scenario: Efetuar o checkout simples
    Given que esteja no checkout com um produto
    When preencher todos os dados do cliente
    And clicar no botão "Finalizar Pedido"
    Then apresentará a mensagem de agradecimento

  Scenario: No checkout simples não preencher todos os campos obrigatórios
    Given que esteja no checkout com um produto
    When clicar no botão "Finalizar Pedido"
    Then apresentará a mensagem que todos os campos não foram preenchidos

  Scenario: No checkout validar o link para Politica de Privacidade
    Given que esteja no checkout com um produto
    When clico no link "Política de Privacidade"
    Then abrirá a página "Política de Privacidade" na nova aba "http://localhost:3000/privacy.html"
