const locators = require("../../support/locators").locators
import variaveis from "../variaveis"

class Conta {

    criarConta(){
        cy.get(locators.Configuracao.menuConfiguracoes).click()
        cy.get(locators.Configuracao.subMenuContas).should('be.visible').click()
        cy.url().should('include', variaveis.geral.endpointContas)
        cy.get(locators.Configuracao.inputNomeConta).type(variaveis.conta.nomeConta)
        cy.get(locators.Configuracao.btnSalvarConta).click()
        cy.get(locators.Mensagem.pegarMensagemToast).should('have.text', variaveis.conta.msgContaInseridaComSucesso)
        cy.get(locators.Mensagem.fecharToast).click()
        cy.get(locators.Mensagem.identificarToast).should('not.be.visible')
        cy.get(locators.Configuracao.pegarContaCadastradaNaTabela).invoke('text').should('eq', variaveis.conta.nomeConta)
    }
    naoPermitirCriarContaJaExistente(){
        cy.get(locators.Configuracao.menuConfiguracoes).click()
        cy.get(locators.Configuracao.subMenuContas).should('be.visible').click()
        cy.url().should('include', variaveis.geral.endpointContas)
        cy.get(locators.Configuracao.inputNomeConta).type(variaveis.conta.nomeConta)
        cy.get(locators.Configuracao.btnSalvarConta).click()
        cy.get(locators.Mensagem.pegarMensagemToast).should('have.text', variaveis.msgsDeErro.erro400)
        cy.get(locators.Mensagem.fecharToast).click()
        cy.get(locators.Mensagem.identificarToast).should('not.be.visible')
    }
    alterarConta(){
        cy.get(locators.Configuracao.menuConfiguracoes).click()
        cy.get(locators.Configuracao.subMenuContas).should('be.visible').click()
        cy.url().should('include', variaveis.geral.endpointContas)
        cy.get(locators.Configuracao.btnEditarConta).should('be.visible').click()
        cy.get(locators.Configuracao.inputNomeConta)
         .should('have.value', variaveis.conta.nomeConta)
         .clear()
         .type(variaveis.conta.nomeContaAlterada)
         .should('have.value', variaveis.conta.nomeContaAlterada)
        cy.get(locators.Configuracao.btnSalvarConta).click()
        cy.get(locators.Mensagem.pegarMensagemToast).should('have.text', variaveis.conta.msgContaAtualizadaComSucesso)
        cy.get(locators.Mensagem.fecharToast).click()
        cy.get(locators.Mensagem.identificarToast).should('not.be.visible')
        cy.get(locators.Configuracao.pegarContaAlteradaNaTabela).invoke('text').should('eq', variaveis.conta.nomeContaAlterada)
    }
}
export default new Conta()