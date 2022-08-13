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
        msgsDeErro: {
            erro400: "Erro: Error: Request failed with status code 400"
    }

}