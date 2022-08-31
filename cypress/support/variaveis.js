const faker = require("faker-br")

const usuario = {
    nome: faker.name.firstName()+" "+faker.name.lastName(),
    email: faker.internet.email(),
    senha: faker.internet.password()
}

export default {
        usuario:{
            nome: faker.name.firstName()+" "+faker.name.lastName(),
            email: faker.internet.email(),
            senha: faker.internet.password()
    },
        cadastro: {
            msgUsuarioCadastradoComSucesso: "Usuário adicionado com sucesso"
    },
        conta: {
            nomeConta: "teste",
            nomeContaAlterada: "TESTE",
            msgContaInseridaComSucesso: "Conta inserida com sucesso!",
            msgContaAtualizadaComSucesso: "Conta atualizada com sucesso!"
    },
        movimentacao: {
            descricaoReceitaSalario: "Salário",
            descricaoReceitaPix: "Pix",
            descricaoDespesaCelular: "Celular",
            descricaoDespesaRoupas: "Roupas",
            interessadoDespesa: "Cartão do dia 20",
            valorReceitaSalario: 5000.00,
            valorReceitaPix: 350.00,
            valorDespesaCelular: 250.00,
            valorDespesaRoupas: 400.00,
            msgMovimentacaoInseridaComSucesso: "Movimentação inserida com sucesso!",
            msgMovimentacaoRemovidaComSucesso: "Movimentação removida com sucesso!"

    },
        msgsDeErro: {
            erro400: "Erro: Error: Request failed with status code 400",
            erro500: "Erro: Error: Request failed with status code 500"
    },
        geral: {
            urlDaAplicacao: "https://barrigareact.wcaquino.me/"
        }
}