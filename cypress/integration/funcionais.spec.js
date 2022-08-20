/// <reference types = "cypress" />

import variaveis from "../../cypress.env"
import util from "../support/util"
import locator from "../support/locators"

describe('Realizando Testes Funcionais', () => {
    before(() => {
        cy.visit('/')
        cy.url().should('include','/login')
        cy.get(locator.Login.inputEmail).type(Cypress.env('login').email)
        cy.get(locator.Login.inputSenha).type(Cypress.env('login').senha, {log: false})
        cy.get(locator.Login.btnEntrar).click()
        cy.get(locator.Mensagem.identificarToast).should('be.visible')
        cy.get(locator.Mensagem.pegarMensagemToast).should("have.text", "Bem vindo, "+Cypress.env('login').nome+"!")
        cy.get(locator.Mensagem.fecharToast).click()
        cy.get(locator.Mensagem.identificarToast).should('not.be.visible')
    })

    it.skip('Deve realizar o cadastro de um usuário válido', () => {
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
        cy.get(locator.Conta.menuConfiguracoes).click()
        cy.get(locator.Conta.subMenuContas).should('be.visible').click()
        cy.url().should('include','/contas')
        cy.get(locator.Conta.inputNomeConta).type(variaveis.conta.nomeConta)
        cy.get(locator.Conta.btnSalvarConta).click()
        cy.get(locator.Mensagem.pegarMensagemToast).should('have.text', variaveis.conta.msgContaInseridaComSucesso)
        cy.get(locator.Mensagem.fecharToast).click()
        cy.get(locator.Mensagem.identificarToast).should('not.be.visible')
        cy.get(locator.Conta.pegarContaCadastradaNaTabela).invoke('text').should('eq', variaveis.conta.nomeConta)
    })

    it('Deve barrar a criação de uma conta já existente', () => {
        cy.get(locator.Conta.menuConfiguracoes).click()
        cy.get(locator.Conta.subMenuContas).should('be.visible').click()
        cy.url().should('include','/contas')
        cy.get(locator.Conta.inputNomeConta).type(variaveis.conta.nomeConta)
        cy.get(locator.Conta.btnSalvarConta).click()
        cy.get(locator.Mensagem.pegarMensagemToast).should('have.text', variaveis.msgsDeErro.erro400)
        cy.get(locator.Mensagem.fecharToast).click()
        cy.get(locator.Mensagem.identificarToast).should('not.be.visible')
    })

    it('Deve alterar uma conta existente', () => {
        cy.get(locator.Conta.menuConfiguracoes).click()
        cy.get(locator.Conta.subMenuContas).should('be.visible').click()
        cy.url().should('include','/contas')
        cy.get(locator.Conta.btnEditarConta).should('be.visible').click()
        cy.get(locator.Conta.inputNomeConta)
         .should('have.value', variaveis.conta.nomeConta)
         .clear()
         .type(variaveis.conta.nomeContaAlterada)
         .should('have.value', variaveis.conta.nomeContaAlterada)
        cy.get(locator.Conta.btnSalvarConta).click()
        cy.get(locator.Mensagem.pegarMensagemToast).should('have.text', variaveis.conta.msgContaAtualizadaComSucesso)
        cy.get(locator.Mensagem.fecharToast).click()
        cy.get(locator.Mensagem.identificarToast).should('not.be.visible')
        cy.get(locator.Conta.pegarContaAlteradaNaTabela).invoke('text').should('eq', variaveis.conta.nomeContaAlterada)
    })

    it.skip('Deve criar uma movimentação de Receita recebida', () => {
        cy.get('.navbar-collapse .navbar-nav .nav-item a[href="/movimentacao"]').click()
        cy.url().should('include', '/movimentacao')
        cy.get('.form-group .btn-success').click()
        cy.get(".form-group [placeholder='Descrição...']").type(variaveis.movimentacao.descricaoReceitaSalario)
        cy.get(".form-group [placeholder='Valor']").type(variaveis.movimentacao.valorReceitaSalario)
        cy.get(".form-group [placeholder='Interessado...']").type(Cypress.env('login').nome)
        cy.get('.btn-outline-danger').click()
        cy.get('.btn-primary').click()
        cy.get('.toast .toast-message').should('have.text', variaveis.movimentacao.msgMovimentacaoInseridaComSucesso)
        cy.get('.container .toast .toast-close-button').click()
        cy.get(locator.Mensagem.identificarToast).should('not.be.visible')
    })

    it.skip('Deve criar uma movimentação de Despesa que já foi paga', () => {
        cy.get('.navbar-collapse .navbar-nav .nav-item a[href="/movimentacao"]').click()
        cy.url().should('include', '/movimentacao')
        cy.get('.form-group .btn-secondary').click()
        cy.get(".form-group [placeholder='Descrição...']").type(variaveis.movimentacao.descricaoDespesaCelular)
        cy.get(".form-group [placeholder='Valor']").type(variaveis.movimentacao.valorDespesaCelular)
        cy.get(".form-group [placeholder='Interessado...']").type(variaveis.usuario.nome)
        cy.get('.btn-outline-danger').click()
        cy.get('.btn-primary').click()
        cy.get('.toast .toast-message').should('have.text', variaveis.movimentacao.msgMovimentacaoInseridaComSucesso)
        cy.get('.container .toast .toast-close-button').click()
        cy.get(locator.Mensagem.identificarToast).should('not.be.visible')
    })

    it.skip('Deve criar uma movimentação de Receita a receber', () => {
        cy.get('.navbar-collapse .navbar-nav .nav-item a[href="/movimentacao"]').click()
        cy.url().should('include', '/movimentacao')
        cy.get('.form-group .btn-success').click()
        cy.get(".form-group [placeholder='Descrição...']").type(variaveis.movimentacao.descricaoReceitaPix+" "+variaveis.usuario.nome)
        cy.get(".form-group [placeholder='Valor']").type(variaveis.movimentacao.valorReceitaPix)
        cy.get(".form-group [placeholder='Interessado...']").type(Cypress.env('login').nome)
        cy.get('.btn-primary').click()
        cy.get('.toast .toast-message').should('have.text', variaveis.movimentacao.msgMovimentacaoInseridaComSucesso)
        cy.get('.container .toast .toast-close-button').click()
        cy.get(locator.Mensagem.identificarToast).should('not.be.visible')
    })

    it.skip('Deve criar uma movimentação de Despesa a receber', () => {
        cy.get('.navbar-collapse .navbar-nav .nav-item a[href="/movimentacao"]').click()
        cy.url().should('include', '/movimentacao')
        cy.get('.form-group .btn-secondary').click()
        cy.get(".form-group [placeholder='Descrição...']").type(variaveis.movimentacao.descricaoDespesaRoupas)
        cy.get(".form-group [placeholder='Valor']").type(variaveis.movimentacao.valorDespesaRoupas)
        cy.get(".form-group [placeholder='Interessado...']").type(variaveis.movimentacao.interessadoDespesa)
        cy.get('.btn-primary').click()
        cy.get('.toast .toast-message').should('have.text', variaveis.movimentacao.msgMovimentacaoInseridaComSucesso)
        cy.get('.container .toast .toast-close-button').click()
        cy.get(locator.Mensagem.identificarToast).should('not.be.visible')
    })
    it.skip('Deve validar o saldo corretamente', () => {
        cy.get('.navbar-nav .nav-item a[href="/"]').click()
        cy.url().should('eq', 'https://barrigareact.wcaquino.me/')
        cy.get(".table tbody > tr > td:contains("+variaveis.conta.nomeContaAlterada+")").invoke('text').should('eq', variaveis.conta.nomeContaAlterada)
        cy.get(".table tbody > tr > td:contains("+variaveis.conta.nomeContaAlterada+")").next().invoke('text').should('eq', util.formataValorDoSaldo(variaveis.movimentacao.valorReceitaSalario, variaveis.movimentacao.valorDespesaCelular))
    })
    it.skip('Deve remover a movimentação criada', () => {
        cy.get('.navbar-nav .nav-item a[href="/extrato"]').click()
        cy.url().should('include', '/extrato')
        cy.get('.receitaPaga .col a .fa-trash-alt').click()
        cy.get('.toast .toast-message').should('have.text', variaveis.movimentacao.msgMovimentacaoRemovidaComSucesso)
        cy.get('.container .toast .toast-close-button').click()
        cy.get(locator.Mensagem.identificarToast).should('not.be.visible')
    })
    it.skip('Deve revalidar o saldo após a exclusão da movimentação de Receita', () => {
        cy.get('.navbar-nav .nav-item a[href="/"]').click()
        cy.url().should('eq', 'https://barrigareact.wcaquino.me/')
        cy.get(".table tbody > tr > td:contains("+variaveis.conta.nomeContaAlterada+")").invoke('text').should('eq', variaveis.conta.nomeContaAlterada)
        cy.get(".table tbody > tr > td:contains("+variaveis.conta.nomeContaAlterada+")").next().invoke('text').should('eq', util.formataValorDoSaldo(0,variaveis.movimentacao.valorDespesaCelular))
    })
})