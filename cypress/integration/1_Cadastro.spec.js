/// <reference types = "cypress" />
import Cadastro from "../support/pages/Cadastro"

describe('Realizando testes da funcionalidade de Cadastro', () => {

    beforeEach(() => {
        cy.visit('/')
    })

    it('Deve realizar o cadastro de um usuário válido', () => {
        Cadastro.cadastrarUsuario()
    })

    it('Não deverá permitir o cadastro sem informar algum dos campos', () => {
        Cadastro.naoDeixarCadastrarMesmoUsuarioNovamente()
    })
})
