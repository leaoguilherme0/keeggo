Feature: Adicionar Produto ao carrinho

  Scenario: Adicionar produto ao carrinho
    Given que esteja na home do QA Commerce sem nenhum produto no carrinho
    When clicar no botão Adicionar ao carrinho do primeiro produto apresentado
    Then apresentará a mensagem Produto adicionado ao carrinho
    And em cima do carrinho aparece o total de "1" produto

  Scenario: Adicionar 2 produtos ao carrinho
    Given que esteja na home do QA Commerce sem nenhum produto no carrinho
    When clicar no botão Adicionar ao carrinho do primeiro produto apresentado
    When clicar no botão Adicionar ao carrinho do segundo produto apresentado
    Then em cima do carrinho aparece o total de "2" produto 
    And apresentará a mensagem Produto adicionado ao carrinho

  Scenario: Adicionar produto ao carrinho
    Given que esteja na home do QA Commerce sem nenhum produto no carrinho
    When clicar no botão Adicionar ao carrinho do primeiro produto apresentado 
    And clico no link "CARRINHO"
    Then será direcionado para o carrinho
    And apresentará o produto adicionado  