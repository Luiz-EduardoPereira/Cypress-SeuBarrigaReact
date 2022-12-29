/// <reference types = "cypress" />

import Util from "../support/util"
import Login from "../support/pages/Login"
import Conta from "../support/pages/Conta"
import Movimentacao from "../support/pages/Movimentacao"

describe('Realizando testes da funcionalidade de Movimentação', () => {

    beforeEach(()=> {
        Util.acessarSistema()
        Login.realizarLogin()
        Util.prepararAmbiente()
        Conta.criarConta()
    })

    it('Deve criar uma movimentação de Receita que já foi recebida', () => {
        Movimentacao.criarReceitaJaRecebida()

    })

    it('Deve criar uma movimentação de Despesa que já foi paga', () => {
        Movimentacao.criarDespesaJaPaga()

    })

    it('Deve criar uma movimentação de Receita pendente', () => {
        Movimentacao.criarReceitaPendente()

    })

    it('Deve criar uma movimentação de Despesa pendente', () => {
        Movimentacao.criarDespesaPendenteDePagamento()

    })

    it('Deve remover a movimentação de Receita paga', () => {
        Movimentacao.criarReceitaJaRecebida()
        Movimentacao.removerMovimentacaoDeReceitaPaga()

    })
})