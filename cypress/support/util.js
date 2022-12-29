import variaveis from "./variaveis";

class Util {
    acessarSistema(){
        cy.visit(variaveis.geral.urlDaAplicacao)
    }
    prepararAmbiente(){
        cy.ResetarAmbiente()
    }

    formataValorDoSaldo(salario, despesa){
        let saldo =  salario - despesa
        let saldoformatado = saldo.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        return saldoformatado
    }
}
export default new Util();
