import { Cliente } from "./Cliente";
import { Conta } from "./Conta";
import Notificacao from "./Notificacao";

export class ContaCorrente extends Conta {
  private chequeEspecial: number;
  private transferenciasRestantes: number;

  constructor(cliente: Cliente, notificacao: Notificacao) {
    super(cliente, notificacao),
      (this.transferenciasRestantes = 2),
      (this.chequeEspecial = 1000);
  }

  public transferir(destino: Conta, valor: number): void {
    const taxa = valor * 0.1;
    const saldoAtual = this.getSaldo();

    if (valor > 0 && valor <= saldoAtual + this.chequeEspecial) {
      this.setSaldo(saldoAtual - valor);

      if (this.transferenciasRestantes > 0) {
        destino.depositar(valor);
        this.transferenciasRestantes--;
      } else {
        this.setSaldo(saldoAtual - (valor + taxa));
        destino.depositar(valor);
      }

      this.transacao.adicionarTransacao("Transferência", valor);
      console.log("Transferência");
    } else {
      console.log("Saldo insuficientes");
    }
  }

  public depositar(valor: number): void {
    this.saldo += valor;
    this.transacao.adicionarTransacao("Depósito", valor);

    if (this.notificacao !== null) {
      this.notificacao.enviaNotificacao("Depósito", valor);
    } else {
      console.log("Notificação nao configurada nessa conta.");
    }

    console.log("Depósito concluído");
  }
  public sacar(valor: number): number {
    if (valor <= this.saldo) {
      this.saldo -= valor;
      this.transacao.adicionarTransacao("Saque", valor);

      if (this.notificacao !== null) {
        this.notificacao.enviaNotificacao("Saque", valor);
      } else {
        console.log("Notificação nao configurada nessa conta.");
      }

      console.log("Saque concluído");
    } else {
      console.log("Sem Saldo na conta");
    }

    return valor;
  }
}
