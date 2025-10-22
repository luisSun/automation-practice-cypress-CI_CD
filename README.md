
---

# 🧪 Projeto de Testes Automatizados com Cypress

![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/luisSun/automation-practice-cypress-CI_CD/cypress.yml?branch=main&label=Build%20%26%20Test&logo=github)
![Cypress Dashboard](https://img.shields.io/endpoint?url=https://dashboard.cypress.io/badge/simple/SEU_PROJECT_ID/main\&style=flat\&logo=cypress)
![Node.js](https://img.shields.io/badge/Node.js-18%2B-green?logo=node.js)
![License](https://img.shields.io/badge/License-GPLv3-blue.svg)

---

Este projeto foi desenvolvido como prática de **automação de testes end-to-end (E2E)** utilizando o **Cypress**, com integração de **CI/CD via GitHub Actions** e relatórios enviados automaticamente ao **Cypress Cloud**.

Os testes cobrem os fluxos principais de **Login** e **Registro de Usuário** no site:
🔗 [https://automationpratice.com.br/](https://automationpratice.com.br/)

---

## 🚀 Tecnologias Utilizadas

* ⚡ **Cypress** — framework de testes E2E
* 🧩 **Node.js**
* 🧪 **Mocha** — para relatórios e estrutura de testes
* 🎭 **Faker.js** — geração dinâmica de dados
* ☁️ **Cypress Cloud** — monitoramento e histórico das execuções
* 🤖 **GitHub Actions** — automação de CI/CD
* 📊 **Mochawesome Reporter** — relatórios HTML

---

## ⚙️ Estrutura do Projeto

```
📦 Projeto Cypress
┣ 📂 .github/
┃ ┗ 📂 workflows/
┃   ┣ 📜 cypress.yml              # Executa testes em push/PR
┃   ┗ 📜 cypress-schedule.yml     # Executa testes a cada 15 min
┣ 📂 cypress/
┃ ┣ 📂 e2e/
┃ ┃ ┣ 📜 login.cy.js
┃ ┃ ┗ 📜 register_users.cy.js
┃ ┣ 📂 fixtures/
┃ ┃ ┗ 📜 example.json
┃ ┣ 📂 reports/html/
┃ ┃ ┗ 📜 index.html
┃ ┣ 📂 screenshots/
┃ ┗ 📂 support/
┃   ┣ 📂 elemments/
┃   ┣ 📂 pages/
┃   ┣ 📜 commands.js
┃   ┗ 📜 e2e.js
┣ 📂 images/
┃ ┗ 📜 teste_final.jpg
┣ 📜 cypress.config.js
┣ 📜 package.json
┣ 📜 LICENSE
┗ 📜 .gitignore
```

---

## 🧩 Workflows CI/CD

### 🔹 **1. Cypress Tests (Push na main)**

Executa os testes sempre que há um **push na branch `main`** ou **pull request para `master`**.

```yaml
name: Cypress Tests

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ master ]

jobs:
  cypress-run:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout/Clone Projeto
        uses: actions/checkout@v4

      - name: Instalar dependências
        run: npm install

      - name: Rodar testes Cypress no Dashboard
        uses: cypress-io/github-action@v6
        with:
          record: true
        env:
          CYPRESS_RECORD_KEY: ${{ secrets.CYPRESS_RECORD_KEY }}

      - name: Upload de relatórios
        uses: actions/upload-artifact@v4
        with:
          name: my-artifact
          path: cypress/reports/html/
```

---

### 🔹 **2. Cypress Tests - Schedule (a cada 15 minutos)**

Executa automaticamente a cada 15 minutos via **cron job**, garantindo monitoramento contínuo da aplicação.

```yaml
name: Cypress Tests - Schedule

on:
  schedule:
    - cron: "0,15,30,45 * * * *"

jobs:
  cypress-run:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout/Clone Projeto
        uses: actions/checkout@v4

      - name: Instalar dependências
        run: npm install

      - name: Rodar testes Cypress no Dashboard
        uses: cypress-io/github-action@v6
        with:
          record: true
        env:
          CYPRESS_RECORD_KEY: ${{ secrets.CYPRESS_RECORD_KEY }}

      - name: Upload de relatórios
        uses: actions/upload-artifact@v4
        with:
          name: my-artifact
          path: cypress/reports/html/
```

---

## 🧪 Testes Implementados

### 🔐 **Login**

**BeforeEach:** visitar a página de login

Cenários:

* Campos de login em branco
* Campo de e-mail em branco
* E-mail inválido
* Senha em branco
* Senha inválida
* Login bem-sucedido

---

### 🧍 **Registro de Usuário**

**BeforeEach:** visitar a página de registro

Cenários:

* Campos vazios
* Nome vazio
* E-mail vazio
* E-mail inválido
* Senha vazia
* Senha incorreta
* Registro bem-sucedido

---

## 💾 Dependências Principais

```json
{
  "devDependencies": {
    "@faker-js/faker": "^10.1.0",
    "cypress": "^15.4.0",
    "cypress-mochawesome-reporter": "^4.0.2"
  }
}
```

---

## ▶️ Como Executar Localmente

### 1️⃣ Instalar dependências

```bash
npm install
```

### 2️⃣ Rodar o Cypress em modo interativo

```bash
npx cypress open
```

### 3️⃣ Rodar em modo headless com relatório

```bash
npx cypress run --reporter mochawesome
```

---

## ☁️ Cypress Cloud

Os resultados são enviados automaticamente para o **Cypress Cloud**, usando a variável:

```
CYPRESS_RECORD_KEY
```

Definida em **GitHub Secrets**.
🔗 [Acesse o painel do Cypress Cloud](https://cloud.cypress.io/)

---

## ⚙️ Pipeline CI/CD

✅ **Continuous Integration (CI)**
A cada `push` ou `pull request`, os testes são executados automaticamente no GitHub Actions.

✅ **Continuous Delivery (CD)**
Com o cron configurado, os testes são agendados a cada 15 minutos — garantindo **monitoramento contínuo**.

---

## 📸 Relatórios

Os relatórios HTML são gerados com o **Mochawesome Reporter** e enviados como artefatos:

```yaml
- name: Upload de relatórios
  uses: actions/upload-artifact@v4
  with:
    name: my-artifact
    path: cypress/reports/html/
```

---

## ✍️ Autor

**Luis Fernando Afonso**
💼 Projeto de estudo — Automação com Cypress + CI/CD
📧 [luis.sun@gmail.com](mailto:luis.sun@gmail.com)

---

## 🧾 Licença

Este projeto é de uso livre para fins educacionais, licenciado sob a **GNU GENERAL PUBLIC LICENSE v3.0**.

![Licença](https://img.shields.io/badge/License-GPLv3-blue.svg)

---

### 🔧 **Como configurar os badges**

1. Substitua:

   * `SEU_USUARIO` → seu usuário GitHub
   * `SEU_REPOSITORIO` → nome do repositório
   * `SEU_PROJECT_ID` → ID do seu projeto no [Cypress Cloud Dashboard](https://cloud.cypress.io/)

Exemplo:

```md
![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/luisafonso/cypress-tests/cypress.yml?branch=main)
![Cypress Dashboard](https://img.shields.io/endpoint?url=https://dashboard.cypress.io/badge/simple/abcd12/main)
```

---
