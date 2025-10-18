/// <reference types="cypress" />


export default {

    checkPageRegister(){
        cy.visit('register/');

        cy.get('.account_form > h3')
            .should('exist')
            .should('be.visible')
            .should('have.text','Cadastro de usuário')
    },

    emptyField(field){
        cy.get(field)
        .should('exist')
        .should('be.visible')
    },

    fillField(field, name){
        cy.get(field)
            .should('exist')
            .should('be.visible')
            .clear()
            .type(name)
    },

    clickBtn(btn){
        cy.get(btn)
        .should('exist')
        .should('be.visible')
        .click()
    },

    errorMsg(field,msg){
        cy.get(field)
        .should('exist')
        .should('be.visible')
        .should('have.text', msg)        
    },

    welcomMsg(field, msg, name){
        cy.get(field)
        .should('exist')
        .should('be.visible')
        .should('have.text', `${msg} ${name}`) 
    }
    
}