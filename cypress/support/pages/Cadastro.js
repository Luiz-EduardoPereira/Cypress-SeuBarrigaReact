import variaveis from '../variaveis'
const locators = require("../locators").locators

class Cadastro {

    cadastrarUsuario(){
        cy.get(locators.Cadastro.menuRegistrar).click()
        cy.url().should('include', '/registro')
        cy.get(locators.Cadastro.inputNome).type(variaveis.usuario.nome)
        cy.get(locators.Cadastro.inputEmail).type(variaveis.usuario.email)
        cy.get(locators.Cadastro.inputSenha).type(variaveis.usuario.senha)
        cy.get(locators.Cadastro.btnRegistrar).click()
        cy.get(locators.Mensagem.identificarToast).should('not.be.visible')
        cy.get(locators.Mensagem.pegarMensagemToast).should('have.text', variaveis.cadastro.msgUsuarioCadastradoComSucesso)
        cy.get(locators.Mensagem.fecharToast).click()
        cy.get(locators.Mensagem.identificarToast).should('not.be.visible')
        cy.url().should('include', '/login')
    }

    naoDeixarCadastrarMesmoUsuarioNovamente(){
        cy.get(locators.Cadastro.menuRegistrar).click()
        cy.url().should('include', '/registro')
        cy.get(locators.Cadastro.inputNome).type(variaveis.usuario.nome)
        cy.get(locators.Cadastro.inputEmail).type(variaveis.usuario.email)
        cy.get(locators.Cadastro.inputSenha).type(variaveis.usuario.senha)
        cy.get(locators.Cadastro.btnRegistrar).click()
        cy.get(locators.Mensagem.identificarToast).should('not.be.visible')
        cy.get(locators.Mensagem.pegarMensagemToast).should('have.text', variaveis.msgsDeErro.erro500)
        cy.url().should('eq', 'https://barrigareact.wcaquino.me/registro')
    }
}
export default new Cadastro();