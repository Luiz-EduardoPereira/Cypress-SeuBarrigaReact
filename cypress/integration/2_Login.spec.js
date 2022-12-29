/// <reference types = "cypress" />

import Login from "../support/pages/Login"


describe('Realizando testes da funcionalidade de Login', () => {

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