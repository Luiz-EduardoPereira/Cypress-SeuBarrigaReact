/// <reference types = "cypress" />

import Util from  "../support/util"
import Login from "../support/pages/Login"
import Conta from "../support/pages/Conta"

describe('Realizando testes da funcionalidade de Conta', () => {

    beforeEach(() => {
        Util.acessarSistema()
        Login.realizarLogin()
        Util.prepararAmbiente()

    })

    it('Deve criar uma conta', () => {
        Conta.criarConta()

    })

    it('Deve barrar a criação de uma conta já existente', () => {
        Conta.criarConta()
        Conta.naoPermitirCriarContaJaExistente()

    })

    it('Deve alterar uma conta existente', () => {
        Conta.criarConta()
        Conta.alterarConta()

    })
})