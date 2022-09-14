import variaveis from "../support/variaveis"

export const locators = {
    Cadastro: {
        menuRegistrar: "#root > div #navbarSupportedContent > ul > li > a:contains('Registrar')",
        inputNome: ".jumbotron .form-group > .form-control:input[placeholder='Nome']",
        inputEmail: ".input-group > .form-control:input[Placeholder='Email']",
        inputSenha: ".jumbotron .form-group > .form-control:input[placeholder='Senha']",
        btnRegistrar: ".jumbotron .btn"
    },
    Login: {
        inputEmail: ".jumbotron .form-group input[placeholder='seu@email.com']",
        inputSenha: ".jumbotron .form-group > .form-control:input[placeholder='Senha']",
        btnEntrar: ".btn"
    },
    Conta: {
        menuConfiguracoes: ".navbar-dark > .dropdown-toggle",
        subMenuContas: ".navbar-dark [href='/contas']",
        inputNomeConta: ".form-group > input",
        btnSalvarConta: ".form-group > button",
        btnEditarConta: ".table > tbody > tr > td > a .fa-edit",
        btnExcluirTodasContas: ".fa-trash-alt",
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
        btnExcluirTodasMovimentacoes: '[href="#"] > .far'

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