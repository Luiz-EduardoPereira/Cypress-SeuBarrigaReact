/// <reference types = "cypress" />

import Util from "../support/util"
import Login from "../support/pages/Login"
import Conta from "../support/pages/Conta"
import Movimentacao from "../support/pages/Movimentacao"
import Dashboard from "../support/pages/Dashboard"

describe('Realizando testes da funcionalidade da Dashboard', () => {

    beforeEach(() => {
        Util.acessarSistema()
        Login.realizarLogin()
        Util.prepararAmbiente()
        Conta.criarConta()
        Conta.alterarConta()
    })
    it('Deve validar o saldo corretamente após a criação de movimentações de Receita e Despesa', () => {
        Movimentacao.criarDespesaJaPaga()
        Movimentacao.criarReceitaJaRecebida()
        Movimentacao.criarDespesaPendenteDePagamento()
        Dashboard.validarSaldoReceitaRecebidaDespesaPaga()

    })

    it('Deve validar o saldo corretamente após a exclusão da movimentação de Receita', () => {
        Movimentacao.criarDespesaJaPaga()
        Movimentacao.criarReceitaJaRecebida()
        Movimentacao.criarDespesaPendenteDePagamento()
        Movimentacao.removerMovimentacaoDeReceitaPaga()
        Dashboard.validarRecalculoDaExclusaoDeMovimentacaoReceitaRecebida()
    })

})