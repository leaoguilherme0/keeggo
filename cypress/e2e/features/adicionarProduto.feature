Feature: Adicionar Produto ao carrinho

  Scenario: Adicionar produto ao carrinho
    Given teste
    When clicar no botão Adicionar ao carrinho do primeiro produto apresentado
    Then apresentará a mensagem Produto adicionado ao carrinho
    And em cima do carrinho aparece o total de "1" produto