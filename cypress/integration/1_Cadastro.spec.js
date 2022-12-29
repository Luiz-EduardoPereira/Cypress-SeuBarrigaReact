/// <reference types = "cypress" />

import Util from "../support/util"
import Cadastro from "../support/pages/Cadastro"

describe('Realizando testes da funcionalidade de Cadastro', () => {

    beforeEach(() => {
        Util.acessarSistema()
    })

    it('Deve realizar o cadastro de um usuário válido', () => {
        Cadastro.cadastrarUsuario()
    })

    it('Não deverá permitir o cadastro de um usuário já existente', () => {
        Cadastro.naoDeixarCadastrarMesmoUsuarioNovamente()
    })
})
