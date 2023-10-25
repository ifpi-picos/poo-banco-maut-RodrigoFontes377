export class Transacao {
  private tipo: string;
  private valor: number;
  private data: Date;

  private transacoes: Transacao[];

  constructor(tipo: string, valor: number) {
    this.tipo = tipo;
    this.valor = valor;
    this.data = new Date();
    this.transacoes = [];
  }

  public getTipo(): string {
    return this.tipo;
  }

  public getValor(): number {
    return this.valor;
  }

  public getData(): Date {
    return this.data;
  }

  public adicionarTransacao(tipo: string, valor: number): void {
    const transacao = new Transacao(tipo, valor);
    this.transacoes.push(transacao);
  }

  public getTransacoes(): Transacao[] {
    return this.transacoes;
  }

  public toString(): string {
    return `${this.tipo} de R$${this.valor} às ${this.data}`;
  }
}

export default Transacao;
