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
    Menu: {
        menu: Menu => `.navbar-dark [data-test='${Menu}']`
    },
    SubMenu: {
        subMenu: subMenu => `.navbar-dark [href='${subMenu}']`
    },
    Configuracao: {
        inputNomeConta: ".form-group > input",
        btnSalvarConta: ".form-group > button",
        btnEditarConta: ".table > tbody > tr > td > a .fa-edit",
        btnExcluirTodasContas: ".fa-trash-alt",
        pegarContaCadastradaNaTabela: nomeConta => `.table > tbody > tr > td:contains('${nomeConta}')`,
        pegarContaAlteradaNaTabela: nomeContaAlterada => `.table > tbody > tr > td:contains('${nomeContaAlterada}')`

    },
    Movimentacao: {
        inputDescricao: ".form-group [placeholder='Descrição...']",
        inputValor: ".form-group [placeholder='Valor']",
        inputInteressado: ".form-group [placeholder='Interessado...']",
        btnSelecionarTipoReceita: ".form-group .btn-success",
        btnSelecionarTipoDespesa: ".form-group .btn-secondary",
        btnSelecionarStatusDeContaPaga: ".btn-outline-danger",
        btnSalvar: ".btn-primary"
    },
    Extrato: {
        btnExcluirReceitaPaga: ".receitaPaga .col a .fa-trash-alt",
        btnExcluirTodasMovimentacoes: '[href="#"] > .far'

    },
    Dashboard: {
        pegarContaNaTabela: conta => `.table tbody > tr > td:contains('${conta}')`
    },
    Mensagem: {
        identificarToast: ".container .toast-top-right",
        pegarMensagemToast: ".container .toast .toast-message",
        fecharToast: ".container .toast .toast-close-button"
    }
}