/// <reference types = "cypress" />

describe('Tela de Login', () => {

    it('Realizando login com sucesso', () => {
        cy.visit('/')
        cy.url().should('include','/login')
        cy.get('.jumbotron .form-group .input-group > .form-control').type(Cypress.env('login').email)
        cy.get(".jumbotron .form-group > .form-control:input[placeholder='Senha']").type(Cypress.env('login').senha, {log: false})
        cy.get('.btn').click()
        cy.get('.container .toast-top-right').should('be.visible')
        cy.get('.container .toast .toast-message').should("have.text", "Bem vindo, "+Cypress.env('login').nome+"!")
    })
})