import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

Given('que acesse a página de login com um cliente válido', () => {
    cy.visit('/login.html'); 
});
 
When('preencher o {string} e {string} corretamente', (email, senha) => {
    cy.get('#email').type(email);
    cy.get('#password').type(senha); 
});

When('preencher o campo Nome', () => {
    cy.get('#name').type('Guilherme');
  });

When('preencher o campo Email', () => {
    cy.get('#email').type('guilherme.teste@keeggo.com'); 
});

When('preencher o campo Senha', () => {
    cy.get('#password').type('@A123456'); 
});