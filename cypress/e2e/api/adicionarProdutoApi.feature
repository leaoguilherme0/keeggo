Feature: Adicionar produto via API

  Scenario: Adicionar produto com sucesso
    Given o carrinho está vazio
    When eu adiciono um produto via API
    Then a resposta deve indicar sucesso
