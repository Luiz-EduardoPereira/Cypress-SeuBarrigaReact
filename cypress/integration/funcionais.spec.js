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
        cy.get('.navbar-dark > .dropdown-toggle').click()
        cy.get(".navbar-dark [href='/contas']").should('be.visible').click()
        cy.url().should('include','/contas')
        cy.get('.table > tbody > tr > td > a .fa-edit').should('be.visible').click()
        cy.get('.form-group > input')
         .should('have.value', variaveis.conta.nomeConta)
         .clear()
         .type(variaveis.conta.nomeContaAlterada)
         .should('have.value', variaveis.conta.nomeContaAlterada)
        cy.get('.form-group > button').click()
        cy.get('.toast .toast-message').should('have.text', variaveis.conta.msgContaAtualizadaComSucesso)
        cy.get('.container .toast .toast-close-button').click()
        cy.get('.container .toast .toast-close-button').should('not.exist')
        cy.get(".table > tbody > tr > td:contains('"+variaveis.conta.nomeContaAlterada+"')").invoke('text').should('eq', variaveis.conta.nomeContaAlterada)
    })

    it('Deve criar uma movimentação de Receita recebida', () => {
        cy.get('.navbar-collapse .navbar-nav .nav-item a[href="/movimentacao"]').click()
        cy.url().should('include', '/movimentacao')
        cy.get('.form-group .btn-success').click()
        cy.get(".form-group [placeholder='Descrição...']").type('Salário')
        cy.get(".form-group [placeholder='Valor']").type('5000.00')
        cy.get(".form-group [placeholder='Interessado...']").type(variaveis.usuario.nome)
        cy.get('.btn-outline-danger').click()
        cy.get('.btn-primary').click()
        cy.get('.toast .toast-message').should('have.text', 'Movimentação inserida com sucesso!')
        //cy.get('.container .toast .toast-close-button').click()
    })

    it.only('Deve criar uma movimentação de Despesa que já foi paga', () => {
        cy.get('.navbar-collapse .navbar-nav .nav-item a[href="/movimentacao"]').click()
        cy.url().should('include', '/movimentacao')
        cy.get('.form-group .btn-secondary').click()
        cy.get(".form-group [placeholder='Descrição...']").type('Celular')
        cy.get(".form-group [placeholder='Valor']").type('250.00')
        cy.get(".form-group [placeholder='Interessado...']").type(variaveis.usuario.nome)
        cy.get('.btn-outline-danger').click()
        cy.get('.btn-primary').click()
        cy.get('.toast .toast-message').should('have.text', 'Movimentação inserida com sucesso!')
    })
})