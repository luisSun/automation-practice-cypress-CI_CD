
# 🧪 Projeto de Testes Automatizados com Cypress

Este projeto foi desenvolvido como prática de **automação de testes end-to-end (E2E)** utilizando o **Cypress**.  
Os testes cobrem cenários de **Login** e **Registro de Usuário** no site [Automation Pratice](https://automationpratice.com.br/).

---

## 🚀 Tecnologias Utilizadas

- Cypress
- Node.js
- Faker.js — para geração dinâmica de dados
- JavaScript (ES6)

---

## ⚙️ Configuração do Projeto

### 📁 Estrutura de Pastas

```

📦 cypress/
┣ 📂 e2e/                 # Arquivos de testes (login.cy.js, register_users.cy.js)
┣ 📂 fixtures/            # Dados estáticos (example.json)
┣ 📂 support/
┃ ┣ 📂 elements/          # Mapeamento de seletores e dados com Faker (registerElements.js)
┃ ┣ 📂 pages/             # Page Objects com funções de navegação e ações
┃ ┗ 📜 commands.js        # Comandos customizados (opcional)
┗ 📜 cypress.config.js    # Configuração geral do Cypress

````

---

### 🌐 Configuração no `cypress.config.js`

```js
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://automationpratice.com.br",
    defaultCommandTimeout: 5000
  }
});
````

---

## 🧩 Estrutura de Suporte

### `registerElements.js`

Arquivo que utiliza **fakerPT_BR** para gerar dados dinâmicos de teste:

```js
import { fakerPT_BR } from '@faker-js/faker';

export const dataSelections = {
  regUser: {
    nameUser: fakerPT_BR.person.fullName(),
    emailValid: fakerPT_BR.internet.email(),
    emailInvali: fakerPT_BR.string.alphanumeric(9),
    passwordValid: fakerPT_BR.internet.password({ length: 9, memorable: true }),
    passwordInvalid: fakerPT_BR.internet.password({ length: 5 })
  },

  fields: {
    nameField: '#user',
    emailField: '#email',
    passField: '#password',
    errorName: '#errorMessageFirstName',
    sucessH2: '#swal2-title',
    bemVindo: '#swal2-html-container',
    erroLogin: '.invalid_input'
  },

  btn: {
    registerBtn: '#btnRegister',
    loginBtn: "#btnLogin"
  },

  msg: {
    msgName: 'O campo nome deve ser prenchido',
    msgEmail: 'O campo e-mail deve ser prenchido corretamente',
    msgPassW: 'O campo senha deve ter pelo menos 6 dígitos',
    erroLoginEmail: 'E-mail inválido.',
    erroLoginPass: 'Senha inválida.',
    sucessh2: 'Cadastro realizado!',
    welcome: 'Bem-vindo',
    welcomeLogin: 'Olá,',
    sucessLogin: 'Login realizado'
  }
}
```

---

## 🧱 Page Objects

Os arquivos em `support/pages` encapsulam as ações realizadas nas páginas, tornando os testes mais organizados e fáceis de manter.

---

## 🧪 Cenários de Teste

### 🔐 Login (`login.cy.js`)

Cenários implementados:

* Login com campos em branco
* Email em branco
* Email inválido
* Senha em branco
* Senha inválida

---

### 🧍 Registro (`register_users.cy.js`)

Cenários implementados:

* Registro com campos em branco
* Nome vazio
* Email vazio
* Email inválido
* Senha vazia
* Senha incorreta
* Registro bem-sucedido

---

## ▶️ Como Executar o Projeto

### 1️⃣ Instalar Dependências

```bash
npm install
```

### 2️⃣ Executar o Cypress em modo interativo

```bash
npx cypress open
```

### 3️⃣ Executar em modo headless

```bash
npx cypress run
```

---

## 📸 Exemplo de Execução

![Resultado](./images/teste_final.jpg)

---

## ✍️ Autor

**Luis Fernando Afonso**
💼 Projeto desenvolvido para estudo de automação com Cypress
📧 Contato: [luis.sun@gmail.com](mailto:luis.sun@gmail.com)

---

## 🧾 Licença

Este projeto é de uso livre para fins educacionais e está licenciado sob a **GNU GENERAL PUBLIC LICENSE v3.0**.

![Licença](https://img.shields.io/badge/License-GPLv3-blue.svg)
