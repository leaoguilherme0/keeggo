Feature: Adicionar produto via API

  Scenario: Executar API com body correto
    Given o carrinho está vazio
    When eu adiciono um produto via API
    Then retornará status 201
    And apresentará a mensagem "Produto adicionado ao carrinho com sucesso."

  Scenario: Executar API sem body
    Given o carrinho está vazio
    When tento adicionar um produto via API sem body
    Then retornará status 201
    