export default {
    formataValorDoSaldo(salario, despesa){
        let saldo =  salario - despesa
        let saldoformatado = saldo.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        return saldoformatado
    }
}
