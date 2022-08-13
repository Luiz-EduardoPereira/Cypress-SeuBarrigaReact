/// <reference types = "cypress" />

import variaveis from "../../cypress.env"

describe('Realizando Testes Funcionais', () => {
    before(() => {
        cy.visit('/')
        cy.url().should('include','/login')
        cy.get('.jumbotron .form-group .input-group > .form-control').type(Cypress.env('login').email)
        cy.get(".jumbotron .form-group > .form-control:input[placeholder='Senha']").type(Cypress.env('login').senha, {log: false})
        cy.get('.btn').click()
        cy.get('.container .toast-top-right').should('be.visible')
        cy.get('.container .toast .toast-message').should("have.text", "Bem vindo, "+Cypress.env('login').nome+"!")
        cy.get('.container .toast .toast-close-button').click()
        cy.get('.container .toast .toast-close-button').should('not.exist')
    })

    it.skip('Deve realizar o cadastro um usuário válido', () => {
        cy.get("#root > div #navbarSupportedContent > ul > li > a:contains('Registrar')").click()
        cy.url().should('include', '/registro')
        cy.get(".jumbotron .form-group > .form-control:input[placeholder='Nome']").type(variaveis.usuario.nome)
        cy.get(".jumbotron .form-group .input-group > input").type(variaveis.usuario.email)
        cy.get(".jumbotron .form-group > .form-control:input[placeholder='Senha']").type(variaveis.usuario.senha)
        cy.get(".jumbotron .btn").click()
        cy.get('.toast-success').should('be.visible')
        cy.get('.toast .toast-message').should('have.text', variaveis.cadastro.msgUsuarioCadastradoComSucesso)
        cy.url().should('include', '/login')
    })

    it('Deve criar uma conta', () => {
        cy.get('.navbar-dark > .dropdown-toggle').click()
        cy.get(".navbar-dark [href='/contas']").should('be.visible').click()
        cy.url().should('include','/contas')
        cy.get('.form-group > input').type(variaveis.conta.nomeConta)
        cy.get('.form-group > button').click()
        cy.get('.toast .toast-message').should('have.text', variaveis.conta.msgContaInseridaComSucesso)
        cy.get('.container .toast .toast-close-button').click()
        cy.get('.container .toast .toast-close-button').should('not.exist')
        //cy.get(".table > tbody > tr > td:contains('teste')").invoke('text').should('eq', variaveis.conta.nomeConta)
        cy.get(".table > tbody > tr > td:contains('"+variaveis.conta.nomeConta+"')").invoke('text').should('eq', variaveis.conta.nomeConta)
    })

    it('Deve barrar a criação de uma conta já existente', () => {
        cy.get('.navbar-dark > .dropdown-toggle').click()
        cy.get(".navbar-dark [href='/contas']").should('be.visible').click()
        cy.url().should('include','/contas')
        cy.get('.form-group > input').type(variaveis.conta.nomeConta)
        cy.get('.form-group > button').click()
        cy.get('.toast .toast-message').should('have.text', variaveis.msgsDeErro.erro400)
        cy.get('.container .toast .toast-close-button').click()
        cy.get('.container .toast .toast-close-button').should('not.exist')
    })
    it('Deve alterar uma conta existente', () => {

    })
})