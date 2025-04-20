Feature: Adicionar Produto ao carrinho

  Scenario: Adicionar produto ao carrinho
    Given que esteja na home do QA Commerce sem nenhum produto no carrinho
    When clicar no botão Adicionar ao carrinho do primeiro produto apresentado
    Then apresentará a mensagem Produto adicionado ao carrinho
    And em cima do carrinho aparece o total de "1" produto