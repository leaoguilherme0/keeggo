Feature: Alterar cadastro

  Scenario: Alterar cadastro
    Given que acesse a página de login com um cliente válido
    When preencher o "guilherme.test@test.com" e "@A123456" corretamente
    And clicar no botão "Entrar"
    And clicar no botão "Atualizar Cadastro"
    And preencher o campo Nome
    And preencher o campo Email
    And preencher o campo Senha
    And clicar no botão "Atualizar"
    Then apresentará a mensagem "Por favor, preencha todos os campos obrigatório marcados com asteriscos!"

     