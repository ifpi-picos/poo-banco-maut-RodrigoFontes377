import { Cliente } from "./Cliente";
import { Conta } from "./Conta";
import Notificacao from "./Notificacao";

export class ContaPoupanca extends Conta {
  private rendimento: number;

  constructor(cliente: Cliente, notificacao: Notificacao) {
    super(cliente, notificacao);
    this.rendimento = 0.1;
  }
  public sacar(valor: number): void {
    if (valor > 0 && valor <= this.getSaldo()) {
      const taxa = valor * 0.05;
      this.saldo -= valor + taxa;
      this.notificacao.enviaNotificacao("saque", valor);
      this.transacao.adicionarTransacao("Saque", valor);
    } else {
      console.log("Saldo insuficiente");
    }
  }

  public depositar(valor: number): void {
    const rendimentoValor = valor * this.rendimento;
    const valorComRendimento = valor + rendimentoValor;
    this.saldo += valorComRendimento;
    this.transacao.adicionarTransacao(
      "Depósito com Rendimento",
      valorComRendimento
    );
  }
  public transferir(destino: Conta, valor: number): void {
    const taxa = valor * 0.1;
    const saldoAtual = this.getSaldo();

    if (valor > 0 && valor <= saldoAtual) {
      this.setSaldo(saldoAtual - valor - taxa);
      destino.setSaldo(destino.getSaldo() + valor);
    } else {
      console.log("Saldo insuficiente");
    }
  }
}
