/// <reference types = "cypress" />

describe('Tela de Cadastro', () => {

    it('Cadastrando um usuário válido', () => {
        cy.visit('/')
        cy.get("#root >div #navbarSupportedContent > ul > li > a:contains('Registrar')").click()
        cy.url().should('include', '/registro')
        cy.get(".jumbotron .form-group > .form-control:input[placeholder='Nome']").type('lep14teste')
        cy.get(".jumbotron .form-group .input-group > input").type('lep14teste@gmail.com')
        cy.get(".jumbotron .form-group > .form-control:input[placeholder='Senha']").type('lep14teste')
        cy.get(".jumbotron .btn").click()
        cy.get('.toast-success').should('be.visible')
        cy.get('.toast .toast-message').should('have.text','Usuário adicionado com sucesso')
        /*usuario = lepteste
        email = lepteste
        senha = lepteste*/
    })
})