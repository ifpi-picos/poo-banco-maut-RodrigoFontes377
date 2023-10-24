//      Run       npx sucrase-node src/App.ts     //

import { Cliente } from "./Cliente";
import Notificacao from "./Notificacao";
import { Transacao } from "./Transacao";

export class Conta {
  private numeroAgencia: number;
  private numeroConta: number;
  protected saldo: number;
  private cliente: Cliente;
  private notificacao!: Notificacao;
  private transacoes: Transacao[] = [];

  constructor(saldo: number, cliente: Cliente, notificacao: Notificacao) {
    this.numeroAgencia = this.NumeroAleatorio(1000, 9999);
    this.numeroConta = this.NumeroAleatorio(1000, 9999);
    this.saldo = saldo;
    this.cliente = cliente;
    cliente.adicionarConta(this);
    this.notificacao = notificacao;
  }
  private NumeroAleatorio(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  private obterData(): string {
    const dataAtual = new Date();
    const formato = new Intl.DateTimeFormat("default", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
    return formato.format(dataAtual);
  }

  public getNotificacao(): Notificacao {
    return this.notificacao;
  }
  public setNotificacao(notificacao: Notificacao) {
    this.notificacao = notificacao;
  }

  getNumeroAgencia(): number {
    return this.numeroAgencia;
  }

  getNumeroConta(): number {
    return this.numeroConta;
  }

  getSaldo(): number {
    return this.saldo;
  }

  getCliente(): Cliente {
    return this.cliente;
  }
  getTransacoes() {
    return this.transacoes;
  }

  public depositar(valor: number): boolean {
    this.saldo += valor;
    this.transacoes.push(new Transacao("Deposito", valor));

    if (this.notificacao !== null) {
      this.notificacao.enviaNotificacao("Depósito", valor);
    } else {
      console.log("Notificação nao configurada nessa conta.");
    }

    console.log("Depósito concluído");
    return false;
  }
  public sacar(valor: number): number {
    if (valor <= this.saldo) {
      this.saldo -= valor;
      this.transacoes.push(new Transacao("Saque", valor));

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
  public transferir(destino: Conta, valor: number): void {
    if (valor <= this.saldo) {
      this.saldo -= valor;
      destino.depositar(valor);
      this.transacoes.push(new Transacao("Trasferencia", valor));

      this.obterData();

      if (this.notificacao !== null) {
        this.notificacao.enviaNotificacao("Transferência", valor);
      } else {
        console.log("Notificação nao configurada nessa conta.");
      }

      console.log("Transferência concluída");
    } else {
      console.log("Sem Saldo na conta");
    }
  }
  public exibirTransacoes(): void {
    console.log(
      `\n***** Extrato de Transacoes da conta ${this.getNumeroConta()} *****`
    );
    this.transacoes.forEach((conta) => {
      console.log(
        `Tipo >>> ${conta.getTipo()}
  Valor >>> R$${conta.getValor()}
  Data >>> ${conta.getData()}\n************`
      );
    });
  }
}
