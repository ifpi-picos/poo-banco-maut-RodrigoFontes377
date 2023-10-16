import { Cliente } from "./Cliente";
import { Transacao } from "./Transacao";

export class Conta {
  private numeroAgencia: string;
  private numeroConta: string;
  private saldo: number;
  private cliente: Cliente;
  private transacao: Transacao;

  constructor(
    numeroAgencia: string,
    numeroConta: string,
    saldo: number,
    cliente: Cliente
  ) {
    this.numeroAgencia = numeroAgencia;
    this.numeroConta = numeroConta;
    this.saldo = saldo;
    this.cliente = cliente;
    cliente.adicionarConta(this);
    this.transacao = new Transacao();
  }

  getNumeroAgencia(): string {
    return this.numeroAgencia;
  }

  getNumeroConta(): string {
    return this.numeroConta;
  }

  getSaldo(): number {
    return this.saldo;
  }

  getCliente(): Cliente {
    return this.cliente;
  }
  depositar(valor: number): void {
    this.saldo += valor;
    this.transacao.adicionarTransacao(`Depósito de R$${valor}`);
    console.log("Depósito concluído com êxito");
  }
  sacar(valor: number): void {
    if (valor <= this.saldo) {
      this.saldo -= valor;
      this.transacao.adicionarTransacao(`Saque de R$${valor}`);
      console.log("Saque concluído com êxito");
    } else {
      console.log("Saldo insuficiente");
    }
  }
}
