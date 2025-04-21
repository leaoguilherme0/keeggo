Feature: Checkout

  Scenario: Efetuar o checkout sem criar conta
    Given que esteja no checkout com um produto
    When preencher todos os dados para entrega
    And selecionar "Boleto"
    And selecionar a opção Termos e Condições
    And clicar no botão "Finalizar Pedido"
    Then apresentará a mensagem de agradecimento

  Scenario: Efetuar o checkout criando conta - Cenário identificou um bug
    Given que esteja no checkout com um produto
    When preencher todos os dados para entrega
    And selecionar a opção para cria uma nova conta
    And preencher os dados da senha
    And selecionar "Boleto"
    And selecionar a opção Termos e Condições
    And clicar no botão "Finalizar Pedido"
    Then apresentará a mensagem de agradecimento    

  Scenario: Efetuar o checkout com boleto
    Given que esteja no checkout com um produto
    When preencher todos os dados para entrega
    And selecionar "Boleto"
    And selecionar a opção Termos e Condições    
    And clicar no botão "Finalizar Pedido"
    Then apresentará a mensagem de agradecimento

  Scenario: Efetuar o checkout com PIX
    Given que esteja no checkout com um produto
    When preencher todos os dados para entrega
    And selecionar "Pix"
    And selecionar a opção Termos e Condições    
    And clicar no botão "Finalizar Pedido"
    Then apresentará a mensagem de agradecimento

  Scenario: Efetuar o checkout com Cartão de Crédito
    Given que esteja no checkout com um produto
    When preencher todos os dados para entrega
    And selecionar "Cartão de Crédito"
    And preencher os dados do cartão
    And selecionar a opção Termos e Condições    
    And clicar no botão "Finalizar Pedido"
    Then apresentará a mensagem de agradecimento

  Scenario: No checkout não preencher todos os campos obrigatórios
    Given que esteja no checkout com um produto
    When clicar no botão "Finalizar Pedido"
    Then apresentará a mensagem que todos os campos não foram preenchidos

  Scenario: No checkout validar o link para Politica de Privacidade
    Given que esteja no checkout com um produto
    When clicar no link "Política de Privacidade"
    Then abrirá a página "Política de Privacidade" na nova aba "/privacy.html"

  Scenario: No checkout validar o link para Termos e Condições
    Given que esteja no checkout com um produto
    When clicar no link "Termos e Condições"
    Then abrirá a página "Termos e Condições" na nova aba "/terms.html"    
