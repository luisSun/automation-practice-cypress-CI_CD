/// <reference types="cypress" />
import CommonPages from '../support/pages/common_pages'
import LoginPages from '../support/pages/login_page.js'
import { dataSelections as data } from '../support/elemments/registerElements.js';



describe('Teste de Login', () => {
  beforeEach(() => {
    CommonPages.visityPageLogin()
  });

  it('Campos de login em branco', () => {
    LoginPages.clickBtn(data.btn.loginBtn)

    LoginPages.errorMsg(data.fields.erroLogin, data.msg.erroLoginEmail)
  });
  

  it('Campo de Email em branco', () => {
    for (let contador = 1; contador <= 2; contador++) {
      cy.log(`Execução número: ${contador}`);

      LoginPages.emptyField(data.fields.nameField)
      LoginPages.fillField(data.fields.passField, data.regUser.passwordValid)

      LoginPages.clickBtn(data.btn.loginBtn)
      LoginPages.errorMsg(data.fields.erroLogin, data.msg.erroLoginEmail)

    }
  });

  it('Campo de Email com dados invalidos', () => {

    LoginPages.fillField(data.fields.nameField, data.regUser.emailInvali)
    LoginPages.fillField(data.fields.passField, data.regUser.passwordValid)

    LoginPages.clickBtn(data.btn.loginBtn)
    LoginPages.errorMsg(data.fields.erroLogin, data.msg.erroLoginEmail)
  });


  it('Campo de Senha em branco', () => {

    LoginPages.fillField(data.fields.nameField, data.regUser.emailValid)
    LoginPages.emptyField(data.fields.passField)

    LoginPages.clickBtn(data.btn.loginBtn)
    LoginPages.errorMsg(data.fields.erroLogin, data.msg.erroLoginPass)
  });

  it('Campo de Senha com dados invalidos', () => {
    LoginPages.fillField(data.fields.nameField, data.regUser.emailValid)
    LoginPages.fillField(data.fields.passField, data.regUser.passwordInvalid)

    LoginPages.clickBtn(data.btn.loginBtn)
    LoginPages.errorMsg(data.fields.erroLogin, data.msg.erroLoginPass)
  });

  it('Sucesso de Login', () => {

    LoginPages.fillField(data.fields.nameField, data.regUser.emailValid)
    LoginPages.fillField(data.fields.passField, data.regUser.passwordValid)

    LoginPages.clickBtn(data.btn.loginBtn)

    LoginPages.welcomMsg(data.fields.bemVindo, data.msg.welcomeLogin, data.regUser.emailValid);

  });


});