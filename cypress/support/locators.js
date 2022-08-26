import variaveis from "../../cypress.env"

export const locators = {
    Login: {
        inputEmail: ".jumbotron .form-group .input-group > .form-control",
        inputSenha: ".jumbotron .form-group > .form-control:input[placeholder='Senha']",
        btnEntrar: ".btn"
    },
    Conta: {
        menuConfiguracoes: ".navbar-dark > .dropdown-toggle",
        subMenuContas: ".navbar-dark [href='/contas']",
        inputNomeConta: ".form-group > input",
        btnSalvarConta: ".form-group > button",
        btnEditarConta: ".table > tbody > tr > td > a .fa-edit",
        pegarContaCadastradaNaTabela: ".table > tbody > tr > td:contains('"+variaveis.conta.nomeConta+"')",
        pegarContaAlteradaNaTabela: ".table > tbody > tr > td:contains('"+variaveis.conta.nomeContaAlterada+"')"

    },
    Movimentacao: {
        menuMovimentacao: ".navbar-collapse .navbar-nav .nav-item a[href='/movimentacao']",
        inputDescricao: ".form-group [placeholder='Descrição...']",
        inputValor: ".form-group [placeholder='Valor']",
        inputInteressado: ".form-group [placeholder='Interessado...']",
        btnSelecionarTipoReceita: ".form-group .btn-success",
        btnSelecionarTipoDespesa: ".form-group .btn-secondary",
        btnSelecionarStatusDeContaPaga: ".btn-outline-danger",
        btnSalvar: ".btn-primary"
    },
    Extrato: {
        menuExtrato: ".navbar-nav a[href='/extrato']",
        btnExcluirReceitaPaga: ".receitaPaga .col a .fa-trash-alt",

    },
    Dashboard: {
        menuHome: ".navbar-nav .nav-item a[href='/']",
        pegarContaNaTabela: ".table tbody > tr > td:contains("+variaveis.conta.nomeContaAlterada+")"
    },
    Mensagem: {
        identificarToast: ".container .toast-top-right",
        pegarMensagemToast: ".container .toast .toast-message",
        fecharToast: ".container .toast .toast-close-button"
    }
}