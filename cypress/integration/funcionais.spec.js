/// <reference types = "cypress" />

import { usuario, cadastro }  from "../../cypress.env"

describe('Realizando Testes Funcionais', () => {

    it('Deve realizar o cadastro um usuário válido', () => {
        cy.visit('/')
        cy.get("#root > div #navbarSupportedContent > ul > li > a:contains('Registrar')").click()
        cy.url().should('include', '/registro')
        cy.get(".jumbotron .form-group > .form-control:input[placeholder='Nome']").type(usuario.nome)
        cy.get(".jumbotron .form-group .input-group > input").type(usuario.email)
        cy.get(".jumbotron .form-group > .form-control:input[placeholder='Senha']").type(usuario.senha)
        cy.get(".jumbotron .btn").click()
        cy.get('.toast-success').should('be.visible')
        cy.get('.toast .toast-message').should('have.text', cadastro.msgUsuarioCadastradoComSucesso)
        cy.url().should('include', '/login')
    })

    it('Deve realizar login com sucesso', () => {
        cy.visit('/')
        cy.url().should('include','/login')
        cy.get('.jumbotron .form-group .input-group > .form-control').type(Cypress.env('login').email)
        cy.get(".jumbotron .form-group > .form-control:input[placeholder='Senha']").type(Cypress.env('login').senha, {log: false})
        cy.get('.btn').click()
        cy.get('.container .toast-top-right').should('be.visible')
        cy.get('.container .toast .toast-message').should("have.text", "Bem vindo, "+Cypress.env('login').nome+"!")
    })

    it('Deve criar uma conta', () => {
        cy.visit('/')
        cy.url().should('include','/login')
        cy.get('.jumbotron .form-group .input-group > .form-control').type(Cypress.env('login').email)
        cy.get(".jumbotron .form-group > .form-control:input[placeholder='Senha']").type(Cypress.env('login').senha, {log: false})
        cy.get('.btn').click()
        cy.get('.container .toast-top-right').should('be.visible')
        cy.get('.container .toast .toast-message').should("have.text", "Bem vindo, "+Cypress.env('login').nome+"!")
        cy.get('.container .toast .toast-close-button').click()
        cy.get('.container .toast .toast-close-button').should('not.exist')
        cy.get('.navbar-dark > .dropdown-toggle').click()
        cy.get(".navbar-dark [href='/contas']").should('be.visible').click()
        cy.url().should('include','/contas')
        cy.get('.form-group > input').type('teste')
        cy.get('.form-group > button').click()
        cy.get('.toast .toast-message').should('have.text', 'Conta inserida com sucesso!')
        cy.get(".table > tbody > tr > td:contains('teste')").invoke('text').should('eq', 'teste')
    })

    it.only('Deve barrar a criação de uma conta já existente', () => {
        cy.visit('/')
        cy.url().should('include','/login')
        cy.get('.jumbotron .form-group .input-group > .form-control').type(Cypress.env('login').email)
        cy.get(".jumbotron .form-group > .form-control:input[placeholder='Senha']").type(Cypress.env('login').senha, {log: false})
        cy.get('.btn').click()
        cy.get('.container .toast-top-right').should('be.visible')
        cy.get('.container .toast .toast-message').should("have.text", "Bem vindo, "+Cypress.env('login').nome+"!")
        cy.get('.container .toast .toast-close-button').click()
        cy.get('.container .toast .toast-close-button').should('not.exist')
        cy.get('.navbar-dark > .dropdown-toggle').click()
        cy.get(".navbar-dark [href='/contas']").should('be.visible').click()
        cy.url().should('include','/contas')
        cy.get('.form-group > input').type('teste')
        cy.get('.form-group > button').click()
        cy.get('.toast .toast-message').should('have.text', 'Erro: Error: Request failed with status code 400')
    })
})