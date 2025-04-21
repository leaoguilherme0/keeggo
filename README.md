# 🧪 Keeggo - Testes Automatizados com Cypress e Cucumber

Este repositório contém uma suíte de testes automatizados desenvolvida com [Cypress](https://www.cypress.io/) e [Cucumber](https://cucumber.io/), utilizando `ESBuild` como empacotador. Ele é ideal para testar aplicações web com clareza, legibilidade e performance.

---

## 🚀 Tecnologias Utilizadas

- [Cypress 13](https://docs.cypress.io/) — Framework de testes end-to-end
- [Cypress Cucumber Preprocessor](https://github.com/badeball/cypress-cucumber-preprocessor) — Suporte ao formato BDD
- [ESBuild](https://esbuild.github.io/) — Pré-processador rápido de bundling
- [Node.js](https://nodejs.org/) — Ambiente de execução

---

## 📁 Estrutura do Projeto

```
.
├── cypress/
│   ├── e2e/                        # Features de teste em formato .feature
│   ├── support/
│   │   ├── step_definitions/       # Definições dos steps (Given, When, Then)
│   │   └── page_objects/           # Page Object com lógicas reutilizáveis de interação
│   └── fixtures/                   # Arquivos de massa de dados (JSON)
├── cypress.config.js               # Configurações do Cypress
├── jsconfig.json                   # Configuração de atalhos de importação e IntelliSense
├── package.json                    # Dependências e scripts do projeto
└── README.md

```

---

## 📦 Instalação

```bash
# Clone o repositório
git clone https://github.com/leaoguilherme0/keeggo.git

# Acesse a pasta
cd keeggo

# Instale as dependências
npm install
```

---

## 🧪 Executando os Testes

### Modo Interativo (GUI)
```bash
npm run cypress:open
```

### Modo Headless (linha de comando)
```bash
npm test
```

---

## ⚙️ Configurações Importantes

### Cypress + Cucumber
As definições de steps são armazenadas em:
```
cypress/support/step_definitions/
```

### Aliases
Você pode usar o alias `@` para importar arquivos da pasta `cypress/support`, exemplo:
```js
import CheckoutPage from '@/pages/CheckoutPage';
```

---

## 🛠️ Scripts Disponíveis

| Comando               | Descrição                               |
|------------------------|-------------------------------------------|
| `npm run cypress:open` | Abre o Cypress no modo interativo         |
| `npm run test`         | Executa os testes em modo headless        |
| `npm install`          | Instala todas as dependências             |

---

## 📌 Requisitos

- Node.js 18+
- npm 9+
- Aplicação rodando localmente em `http://localhost:3000`

👤 Autor

Guilherme Leão
