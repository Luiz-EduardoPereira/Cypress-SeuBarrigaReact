const locators = require('../locators').locators
import variaveis from '../variaveis'
import util from  '../util'

class Dashbord {

    validarSaldoReceitaRecebidaDespesaPaga(){
        cy.get(locators.Menu.menu(variaveis.geral.dataTestHome)).click()
        cy.url().should('eq', variaveis.geral.urlDaAplicacao)
        cy.get(locators.Dashboard.pegarContaNaTabela(variaveis.conta.nomeContaAlterada)).invoke('text').should('eq', variaveis.conta.nomeContaAlterada)
        cy.get(locators.Dashboard.pegarContaNaTabela(variaveis.conta.nomeContaAlterada)).next().invoke('text').should('eq', util.formataValorDoSaldo(variaveis.movimentacao.valorReceitaSalario, variaveis.movimentacao.valorDespesaCelular))
    }
    validarRecalculoDaExclusaoDeMovimentacaoReceitaRecebida(){
        cy.get(locators.Menu.menu(variaveis.geral.dataTestHome)).click()
        cy.url().should('eq', variaveis.geral.urlDaAplicacao)
        cy.get(locators.Dashboard.pegarContaNaTabela(variaveis.conta.nomeContaAlterada)).invoke('text').should('eq', variaveis.conta.nomeContaAlterada)
        cy.get(locators.Dashboard.pegarContaNaTabela(variaveis.conta.nomeContaAlterada)).next().invoke('text').should('eq', util.formataValorDoSaldo(0,variaveis.movimentacao.valorDespesaCelular))
    }
}
export default new Dashbord();