/// <reference types = "cypress" />

describe('Tela de Cadastro', () => {

    it('Cadastrando um usuário válido', () => {
        cy.visit('/')
        cy.get("#root >div #navbarSupportedContent > ul > li > a:contains('Registrar')").click()
        cy.url().should('include', '/registro')
        cy.get(".jumbotron .form-group > .form-control:input[placeholder='Nome']").type('lep4teste')
        cy.get(".jumbotron .form-group .input-group > input").type('teste@gmail.com').type('lep4teste@gmail.com')
        cy.get(".jumbotron .form-group > .form-control:input[placeholder='Senha']").type('lep4teste')
        cy.get(".jumbotron .btn").click()
        cy.get('.toast').should('be.visible').and('have.text', 'Usuário adicionado com sucesso')
        /*usuario = lepteste
        email = lepteste
        senha = lepteste*/
    })
})