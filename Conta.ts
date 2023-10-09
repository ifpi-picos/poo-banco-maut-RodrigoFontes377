class Conta {
  private numeroConta: string;
  private numeroAgencia: string;
  private saldo: number;
  private cliente: Cliente;
  private transacao: Transacao;

  constructor(
    numeroConta: string,
    numeroAgencia: string,
    saldo: number,
    cliente: Cliente
  ) {
    this.numeroConta = numeroConta;
    this.numeroAgencia = numeroAgencia;
    this.saldo = saldo;
    this.cliente = cliente;
    this.transacao = new Transacao();
  }
}
