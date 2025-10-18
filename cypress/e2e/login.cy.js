/// <reference types="cypress" />
import CommomPages from '../support/pages/common_pages'
import LoginPages from '../support/pages/login_page.js'
import { dataSelections as data } from '../support/elemments/registerElements.js';



describe('Teste de Login', () => {
  beforeEach(() => {
    CommomPages.visityPageLogin()
  });

  it('Login em Branco', () => {
    LoginPages.clickBtn(data.btn.loginBtn)

    LoginPages.errorMsg(data.fields.erroLogin, data.msg.erroLoginEmail)
  });

  it.only('Email em branco', () => {
    for (let contador = 1; contador <= 2; contador++) {
      cy.log(`Execução número: ${contador}`);

      LoginPages.emptyField(data.fields.nameField)
      LoginPages.fillField(data.fields.passField, data.regUser.passwordValid)

      LoginPages.clickBtn(data.btn.loginBtn)
      LoginPages.errorMsg(data.fields.erroLogin, data.msg.erroLoginEmail)

    }
  });

  it('Email invalido', () => {

    LoginPages.fillField(data.fields.nameField, data.regUser.emailInvali)
    LoginPages.fillField(data.fields.passField, data.regUser.passwordValid)

    LoginPages.clickBtn(data.btn.loginBtn)
    LoginPages.errorMsg(data.fields.erroLogin, data.msg.erroLoginEmail)
  });


  it('Senha em branco', () => {

    LoginPages.fillField(data.fields.nameField, data.regUser.emailValid)
    LoginPages.emptyField(data.fields.passField)

    LoginPages.clickBtn(data.btn.loginBtn)
    LoginPages.errorMsg(data.fields.erroLogin, data.msg.erroLoginPass)
  });

  it('Senha invalido', () => {
    LoginPages.fillField(data.fields.nameField, data.regUser.emailValid)
    LoginPages.fillField(data.fields.passField, data.regUser.passwordInvalid)

    LoginPages.clickBtn(data.btn.loginBtn)
    LoginPages.errorMsg(data.fields.erroLogin, data.msg.erroLoginPass)
  });

  it('Sucesso', () => {

    LoginPages.fillField(data.fields.nameField, data.regUser.emailValid)
    LoginPages.fillField(data.fields.passField, data.regUser.passwordValid)

    LoginPages.clickBtn(data.btn.loginBtn)

    LoginPages.welcomMsg(data.fields.bemVindo, data.msg.welcomeLogin, data.regUser.emailValid);

  });


});