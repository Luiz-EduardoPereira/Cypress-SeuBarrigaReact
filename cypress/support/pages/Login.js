const locators = require("../../support/locators").locators
import variaveis from "../variaveis"

class Login {

    realizarLogin(){
        cy.visit(variaveis.geral.urlDaAplicacao)
        cy.url().should('include', variaveis.geral.endpointLogin)
        cy.get(locators.Login.inputEmail).type(Cypress.env('login').email)
        cy.get(locators.Login.inputSenha).type(Cypress.env('login').senha, {log: false})
        cy.get(locators.Login.btnEntrar).click()
        cy.get(locators.Mensagem.identificarToast).should('be.visible')
        cy.get(locators.Mensagem.pegarMensagemToast).should("have.text", "Bem vindo, "+Cypress.env('login').nome+"!")
        cy.get(locators.Mensagem.fecharToast).click()
        cy.get(locators.Mensagem.identificarToast).should('not.be.visible')
    }
    prepararAmbiente(){
        cy.ResetarAmbiente()
    }
}
export default new Login();
