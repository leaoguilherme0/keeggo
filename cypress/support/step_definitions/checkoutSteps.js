import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import CheckoutPage from '../pages/CheckoutPage';
import HomePage from '@pages/HomePage';

let response;

Given('que esteja no checkout com um produto', () => {
  HomePage.limparCarrinho();
  cy.fixture('bodyCarrinhoValido').then((body) => {
    CheckoutPage.adicionarProduto(body).then((res) => {
      response = res;
    });
  });
  CheckoutPage.visitarCheckout();
});

When('clicar no botão {string}', (botao) => {
  CheckoutPage.clicarBotao(botao);
});

When('clicar no link {string}', (textoDoLink) => {
  CheckoutPage.clicarLink(textoDoLink);
});

When("preencher todos os dados para entrega", () => {
  CheckoutPage.preencherEndereco();
});

When("selecionar a opção para cria uma nova conta", () => {
  CheckoutPage.selecionarCriarConta();
});

When("preencher os dados da senha", () => {
  CheckoutPage.preencherSenha();
});

When("selecionar {string}", (opcao) => {
  CheckoutPage.selecionarOpcao(opcao);
});

When("selecionar a opção Termos e Condições", () => {
  CheckoutPage.aceitarTermos();
});

When("preencher os dados do cartão", () => {
  CheckoutPage.preencherCartao();
});

Then("apresentará a mensagem de agradecimento", () => {
  CheckoutPage.validarMensagemAgradecimento();
});

Then("apresentará a mensagem que todos os campos não foram preenchidos", () => {
  CheckoutPage.validarCamposObrigatorios();
});

Then('abrirá a página {string} na nova aba {string}', (textoDoLink, urlEsperada) => {
  CheckoutPage.validarLinkNovaAba(textoDoLink, urlEsperada);
});
