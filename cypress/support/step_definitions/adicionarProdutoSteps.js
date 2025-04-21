import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import HomePage from '@pages/HomePage';


Given('que esteja na home do QA Commerce sem nenhum produto no carrinho', () => {
  HomePage.limparCarrinho();
  HomePage.visitarHome();
});

When('clicar no botão Adicionar ao carrinho do primeiro produto apresentado', () => {
  HomePage.adicionarPrimeiroProduto();
});

When('clicar no botão Adicionar ao carrinho do segundo produto apresentado', () => {
  HomePage.adicionarSegundoProduto();
});

Then('apresentará a mensagem Produto adicionado ao carrinho', () => {
  HomePage.validarMensagemProdutoAdicionado();
});

Then('em cima do carrinho aparece o total de {string} produto', (mensagem) => {
  HomePage.validarTotalCarrinho(mensagem);
});

Then('será direcionado para o carrinho', () => {
  HomePage.validarRedirecionamentoParaCarrinho();
});

Then('apresentará o produto adicionado', () => {
  HomePage.validarProdutoNoCarrinho();
});
