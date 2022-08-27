import variaveis from '../variaveis'

class Cadastro {

    cadastrarUsuario(){
        cy.get("#root > div #navbarSupportedContent > ul > li > a:contains('Registrar')").click()
        cy.url().should('include', '/registro')
        cy.get(".jumbotron .form-group > .form-control:input[placeholder='Nome']").type(variaveis.usuario.nome)
        cy.get(".jumbotron .form-group .input-group > input").type(variaveis.usuario.email)
        cy.get(".jumbotron .form-group > .form-control:input[placeholder='Senha']").type(variaveis.usuario.senha)
        cy.get(".jumbotron .btn").click()
        cy.get('.toast-success').should('be.visible')
        cy.get('.toast .toast-message').should('have.text', variaveis.cadastro.msgUsuarioCadastradoComSucesso)
        cy.url().should('include', '/login')
    }
}
export default new Cadastro();