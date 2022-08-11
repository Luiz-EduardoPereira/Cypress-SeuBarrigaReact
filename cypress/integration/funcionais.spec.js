/// <reference types = "cypress" />

import { usuario, cadastro }  from "../../cypress.env"

describe('Realizando Testes Funcionais', () => {

    it('Cadastrando um usuário válido', () => {
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