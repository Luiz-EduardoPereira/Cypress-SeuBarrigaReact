/// <reference types = "cypress" />
import Login from "../support/pages/Login"
import Conta from "../support/pages/Conta"



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

    it.skip('Deve criar uma conta', () => {
        Conta.criarConta()
    })

    it.skip('Deve barrar a criação de uma conta já existente', () => {
        Conta.naoPermitirCriarContaJaExistente()
    })

    it('Deve alterar uma conta existente', () => {
        Conta.alterarConta()
    })

    it.skip('Deve criar uma movimentação de Receita recebida', () => {
        cy.get(locators.Movimentacao.menuMovimentacao).click()
        cy.url().should('include', '/movimentacao')
        cy.get(locators.Movimentacao.btnSelecionarTipoReceita).click()
        cy.get(locators.Movimentacao.inputDescricao).type(variaveis.movimentacao.descricaoReceitaSalario)
        cy.get(locators.Movimentacao.inputValor).type(variaveis.movimentacao.valorReceitaSalario)
        cy.get(locators.Movimentacao.inputInteressado).type(Cypress.env('login').nome)
        cy.get(locators.Movimentacao.btnSelecionarStatusDeContaPaga).click()
        cy.get(locators.Movimentacao.btnSalvar).click()
        cy.get(locators.Mensagem.pegarMensagemToast).should('have.text', variaveis.movimentacao.msgMovimentacaoInseridaComSucesso)
        cy.get(locators.Mensagem.fecharToast).click()
        cy.get(locators.Mensagem.identificarToast).should('not.be.visible')
    })

    it.skip('Deve criar uma movimentação de Despesa que já foi paga', () => {
        cy.get(locators.Movimentacao.menuMovimentacao).click()
        cy.url().should('include', '/movimentacao')
        cy.get(locators.Movimentacao.btnSelecionarTipoDespesa).click()
        cy.get(locators.Movimentacao.inputDescricao).type(variaveis.movimentacao.descricaoDespesaCelular)
        cy.get(locators.Movimentacao.inputValor).type(variaveis.movimentacao.valorDespesaCelular)
        cy.get(locators.Movimentacao.inputInteressado).type(variaveis.usuario.nome)
        cy.get(locators.Movimentacao.btnSelecionarStatusDeContaPaga).click()
        cy.get(locators.Movimentacao.btnSalvar).click()
        cy.get(locators.Mensagem.pegarMensagemToast).should('have.text', variaveis.movimentacao.msgMovimentacaoInseridaComSucesso)
        cy.get(locators.Mensagem.fecharToast).click()
        cy.get(locators.Mensagem.identificarToast).should('not.be.visible')
    })

    it.skip('Deve criar uma movimentação de Receita a receber', () => {
        cy.get(locators.Movimentacao.menuMovimentacao).click()
        cy.url().should('include', '/movimentacao')
        cy.get(locators.Movimentacao.btnSelecionarTipoReceita).click()
        cy.get(locators.Movimentacao.inputDescricao).type(variaveis.movimentacao.descricaoReceitaPix+" "+variaveis.usuario.nome)
        cy.get(locators.Movimentacao.inputValor).type(variaveis.movimentacao.valorReceitaPix)
        cy.get(locators.Movimentacao.inputInteressado).type(Cypress.env('login').nome)
        cy.get(locators.Movimentacao.btnSalvar).click()
        cy.get(locators.Mensagem.pegarMensagemToast).should('have.text', variaveis.movimentacao.msgMovimentacaoInseridaComSucesso)
        cy.get(locators.Mensagem.fecharToast).click()
        cy.get(locators.Mensagem.identificarToast).should('not.be.visible')
    })

    it.skip('Deve criar uma movimentação de Despesa a receber', () => {
        cy.get(locators.Movimentacao.menuMovimentacao).click()
        cy.url().should('include', '/movimentacao')
        cy.get(locators.Movimentacao.btnSelecionarTipoDespesa).click()
        cy.get(locators.Movimentacao.inputDescricao).type(variaveis.movimentacao.descricaoDespesaRoupas)
        cy.get(locators.Movimentacao.inputValor).type(variaveis.movimentacao.valorDespesaRoupas)
        cy.get(locators.Movimentacao.inputInteressado).type(variaveis.movimentacao.interessadoDespesa)
        cy.get(locators.Movimentacao.btnSalvar).click()
        cy.get(locators.Mensagem.pegarMensagemToast).should('have.text', variaveis.movimentacao.msgMovimentacaoInseridaComSucesso)
        cy.get(locators.Mensagem.fecharToast).click()
        cy.get(locators.Mensagem.identificarToast).should('not.be.visible')
    })
    it.skip('Deve validar o saldo corretamente', () => {
        cy.get(locators.Dashboard.menuHome).click()
        cy.url().should('eq', variaveis.geral.urlDaAplicacao)
        cy.get(locators.Dashboard.pegarContaNaTabela).invoke('text').should('eq', variaveis.conta.nomeContaAlterada)
        cy.get(locators.Dashboard.pegarContaNaTabela).next().invoke('text').should('eq', util.formataValorDoSaldo(variaveis.movimentacao.valorReceitaSalario, variaveis.movimentacao.valorDespesaCelular))
    })
    it.skip('Deve remover a movimentação criada', () => {
        cy.get(locators.Extrato.menuExtrato).click()
        cy.url().should('include', '/extrato')
        cy.get(locators.Extrato.btnExcluirReceitaPaga).click()
        cy.get(locators.Mensagem.pegarMensagemToast).should('have.text', variaveis.movimentacao.msgMovimentacaoRemovidaComSucesso)
        cy.get(locators.Mensagem.fecharToast).click()
        cy.get(locators.Mensagem.identificarToast).should('not.be.visible')
    })
    it.skip('Deve revalidar o saldo após a exclusão da movimentação de Receita', () => {
        cy.get(locators.Dashboard.menuHome).click()
        cy.url().should('eq', variaveis.geral.urlDaAplicacao)
        cy.get(locators.Dashboard.pegarContaNaTabela).invoke('text').should('eq', variaveis.conta.nomeContaAlterada)
        cy.get(locators.Dashboard.pegarContaNaTabela).next().invoke('text').should('eq', util.formataValorDoSaldo(0,variaveis.movimentacao.valorDespesaCelular))
    })
})