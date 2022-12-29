/// <reference types = "cypress" />

import Util from "../support/util"
import Login from "../support/pages/Login"


describe('Realizando testes da funcionalidade de Login', () => {
    beforeEach(() => {
        Util.acessarSistema()
    })

    it('Realizar Login com sucesso', () => {
        Login.realizarLogin()
    })

    it('Realizar Login utilizando senha inválida', () => {
        Login.realizarLoginComSenhaInvalida()
    })

    it('Realizar Login utilizando email inválido', () => {
        Login.realizarLoginComEmailInvalido()
    })
})