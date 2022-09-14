/// <reference types = "cypress" />
import Cadastro from "../support/pages/Cadastro"

describe('Tela de Cadastro', () => {
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
