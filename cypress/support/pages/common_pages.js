/// <reference types="cypress" />

export default {
    visityPageRegister() {
        cy.visit('/')
            .get('.mobile-menu-logo')
            .should('exist')
            .should('be.visible')

        cy.get('.fa-lock')
            .should('exist')
            .should('be.visible')
            .click()

        cy.get('.account_form > h3')
            .should('exist')
            .should('be.visible')
            .should('have.text', 'Cadastro de usuário')

    },

    visityPageLogin() {
        cy.visit('/')
            .get('.mobile-menu-logo')
            .should('exist')
            .should('be.visible')

        cy.get('.fa-user')
            .should('exist')
            .should('be.visible')
            .click()

        cy.get('.account_form > h3')
            .should('exist')
            .should('be.visible')
            .should('have.text', 'Login')

    }
}