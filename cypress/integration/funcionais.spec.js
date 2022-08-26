/// <reference types = "cypress" />
import Login from "../support/pages/Login"
import Conta from "../support/pages/Conta"
import Movimentacao from "../support/pages/Movimentacao"
import Dashboard from "../support/pages/Dashboard"



describe('Realizando Testes Funcionais', () => {
    beforeEach(() => {
        Login.realizarLogin()
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
        Conta.criarConta()

    })

    it('Deve barrar a criação de uma conta já existente', () => {
        Conta.naoPermitirCriarContaJaExistente()

    })

    it('Deve alterar uma conta existente', () => {
        Conta.alterarConta()

    })

    it('Deve criar uma movimentação de Receita que já foi recebida', () => {
        Movimentacao.criarReceitaJaRecebida()

    })

    it('Deve criar uma movimentação de Despesa que já foi paga', () => {
        Movimentacao.criarDespesaJaPaga()

    })

    it('Deve criar uma movimentação de Receita pendente', () => {
        Movimentacao.criarReceitaPendente()

    })

    it('Deve criar uma movimentação de Despesa pendente', () => {
        Movimentacao.criarDespesaPendenteDePagamento()

    })

    it('Deve validar o saldo corretamente', () => {
        Dashboard.validarSaldoReceitaRecebidaDespesaPaga()

    })

    it('Deve remover a movimentação criada', () => {
        Movimentacao.removerMovimentacaoDeReceitaPaga()

    })

    it('Deve revalidar o saldo após a exclusão da movimentação de Receita', () => {
        Dashboard.validarRecalculoDaExclusaoDeMovimentacaoReceitaRecebida()

    })
})