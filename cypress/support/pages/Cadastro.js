import variaveis from '../variaveis'
const locators = require("../locators").locators

class Cadastro {

    cadastrarUsuario(){
        cy.get(locators.SubMenu.subMenu(variaveis.geral.endpointRegistro)).click()
        cy.url().should('include', variaveis.geral.endpointRegistro)
        cy.get(locators.Cadastro.inputNome).type(variaveis.usuario.nome)
        cy.get(locators.Cadastro.inputEmail).type(variaveis.usuario.email)
        cy.get(locators.Cadastro.inputSenha).type(variaveis.usuario.senha)
        cy.get(locators.Cadastro.btnRegistrar).click()
        cy.get(locators.Mensagem.identificarToast).should('not.be.visible')
        cy.get(locators.Mensagem.pegarMensagemToast).should('have.text', variaveis.cadastro.msgUsuarioCadastradoComSucesso)
        cy.get(locators.Mensagem.fecharToast).click()
        cy.get(locators.Mensagem.identificarToast).should('not.be.visible')
        cy.url().should('include', variaveis.geral.endpointLogin)
    }

    naoDeixarCadastrarMesmoUsuarioNovamente(){
        cy.get(locators.SubMenu.subMenu(variaveis.geral.endpointRegistro)).click()
        cy.url().should('include', variaveis.geral.endpointRegistro)
        cy.get(locators.Cadastro.inputNome).type(variaveis.usuario.nome)
        cy.get(locators.Cadastro.inputEmail).type(variaveis.usuario.email)
        cy.get(locators.Cadastro.inputSenha).type(variaveis.usuario.senha)
        cy.get(locators.Cadastro.btnRegistrar).click()
        cy.get(locators.Mensagem.identificarToast).should('not.be.visible')
        cy.get(locators.Mensagem.pegarMensagemToast).should('have.text', variaveis.msgsDeErro.erro500)
        cy.url().should('eq', variaveis.geral.urlDeRegistro)
    }
}
export default new Cadastro();