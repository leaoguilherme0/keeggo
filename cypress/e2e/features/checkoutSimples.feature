Feature: Checkout Simples

  Scenario: Efetuar o checkout simples
    Given que esteja no carrinho com um produto
    When clicar no botão "Ir para o Checkout"
    And preencher todos os dados do cliente
    And clicar no botão "Finalizar Pedido"
    Then apresentará a mensagem de agradecimento

  Scenario: No checkout simples não preencher todos os campos obrigatórios
    Given que esteja no carrinho com um produto
    When clicar no botão "Ir para o Checkout"
    And clicar no botão "Finalizar Pedido"
    Then apresentará a mensagem que todos os campos não foram preenchidos