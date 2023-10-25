//      Run       npx sucrase-node src/App.ts     //

import { Cliente } from "./Cliente";
import Notificacao from "./Notificacao";
import Transacao from "./Transacao";

export abstract class Conta {
  protected numeroAgencia: number;
  protected numeroConta: number;
  protected saldo: number;
  protected cliente: Cliente;
  protected notificacao: Notificacao;
  protected transacao: Transacao;
  constructor(cliente: Cliente, notificacao: Notificacao) {
    this.numeroAgencia = this.NumeroAleatorio(10, 99);
    this.numeroConta = this.NumeroAleatorio(10, 99);
    this.saldo = 0;
    this.cliente = cliente;
    cliente.adicionarConta(this);
    this.notificacao = notificacao;

    this.transacao = new Transacao("TipoDaTransacao", 100);
  }
  private NumeroAleatorio(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  public obterData(): string {
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
  setNumeroAgencia(): number {
    return (this.numeroAgencia = this.NumeroAleatorio(10, 99));
  }

  getNumeroConta(): number {
    return this.numeroConta;
  }
  setNumeroConta(): number {
    return (this.numeroConta = this.NumeroAleatorio(10, 99));
  }

  public getSaldo(): number {
    return this.saldo;
  }
  public setSaldo(novoSaldo: number): void {
    this.saldo = novoSaldo;
  }

  getCliente(): Cliente {
    return this.cliente;
  }
  getTransacoes() {
    return this.transacao;
  }

  public abstract depositar(valor: number): void;

  public abstract sacar(valor: number): void;

  public abstract transferir(destino: Conta, valor: number): void;
  //   if (valor <= this.saldo) {
  //     this.saldo -= valor;
  //     destino.depositar(valor);
  //     this.transacao.adicionarTransacao(
  //       "Transferência",
  //       valor,
  //       this.obterData()
  //     );

  //     this.obterData();

  //     if (this.notificacao !== null) {
  //       this.notificacao.enviaNotificacao("Transferência", valor);
  //     } else {
  //       console.log("Notificação nao configurada nessa conta.");
  //     }

  //     console.log("Transferência concluída");
  //   } else {
  //     console.log("Sem Saldo na conta");
  //   }
  // }

  public obterTransacoes(): Transacao[] {
    return this.transacao.getTransacoes();
  }
}
