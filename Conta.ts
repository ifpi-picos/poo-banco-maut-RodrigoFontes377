class Conta {
  private numeroAgencia: string;
  private numeroConta: string;
  private saldo: number;
  private cliente: Cliente;

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
  }
}
