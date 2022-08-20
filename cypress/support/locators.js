import variaveis from "../../cypress.env"

const locators = {
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
    Mensagem: {
        identificarToast: ".container .toast-top-right",
        pegarMensagemToast: ".container .toast .toast-message",
        fecharToast: ".container .toast .toast-close-button"

    }
}
export default locators