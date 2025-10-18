/// <reference types="cypress" />
import CommonPages from "../support/pages/common_pages.js"
import RegisterPage from "../support/pages/register_page.js"
import { dataSelections as data } from '../support/elemments/registerElements.js';


describe('Teste de cadastrod e usuarios', () => {
    beforeEach(() => {
        CommonPages.visityPageRegister()
    });

    it('Registrar: Nome Vazio', () => {
        RegisterPage.emptyField(data.fields.nameField);
        RegisterPage.fillField(data.fields.emailField, data.regUser.emailValid);
        RegisterPage.fillField(data.fields.passField, data.regUser.passwordValid);

        RegisterPage.clickBtn(data.btn.registerBtn)
        RegisterPage.errorMsg(data.fields.errorName, data.msg.msgName)

    });

    it('Registrar: Email Vazio', () => {

        RegisterPage.fillField(data.fields.nameField, data.regUser.nameUser);
        RegisterPage.emptyField(data.fields.emailField);
        RegisterPage.fillField(data.fields.passField, data.regUser.passwordValid);

        RegisterPage.clickBtn(data.btn.registerBtn);
        RegisterPage.errorMsg(data.fields.errorName, data.msg.msgEmail);

    })


    it('Registrar: Email Invalido', () =>{

        RegisterPage.fillField(data.fields.nameField, data.regUser.nameUser);
        RegisterPage.fillField(data.fields.emailField, data.regUser.emailInvali);
        RegisterPage.fillField(data.fields.passField, data.regUser.passwordValid);

        RegisterPage.clickBtn(data.btn.registerBtn);
        RegisterPage.errorMsg(data.fields.errorName, data.msg.msgEmail);
    })


    it('Registrar: Senha Vazia', () =>{

        RegisterPage.fillField(data.fields.nameField, data.regUser.nameUser);
        RegisterPage.fillField(data.fields.emailField, data.regUser.emailValid);
        RegisterPage.emptyField(data.fields.passField);

        RegisterPage.clickBtn(data.btn.registerBtn);
        RegisterPage.errorMsg(data.fields.errorName, data.msg.msgPassW);
    })

    it('Registrar: Semha Incorreta', () =>{

        RegisterPage.fillField(data.fields.nameField, data.regUser.nameUser);
        RegisterPage.fillField(data.fields.emailField, data.regUser.emailValid);
        RegisterPage.fillField(data.fields.passField, data.regUser.passwordInvalid);

        RegisterPage.clickBtn(data.btn.registerBtn);
        RegisterPage.errorMsg(data.fields.errorName, data.msg.msgPassW);
    })

    it('Registrar: Sucesso', () =>{

        RegisterPage.fillField(data.fields.nameField, data.regUser.nameUser);
        RegisterPage.fillField(data.fields.emailField, data.regUser.emailValid);
        RegisterPage.fillField(data.fields.passField, data.regUser.passwordValid);

        RegisterPage.clickBtn(data.btn.registerBtn);
        RegisterPage.errorMsg(data.fields.sucessH2, data.msg.sucessh2);
        RegisterPage.welcomMsg(data.fields.bemVindo, data.msg.welcome, data.regUser.nameUser)
    })



});