/// <reference types = "cypress" />

import { usuario, cadastro }  from "./../../cypress.env"

describe('Tela de Cadastro', () => {

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
})