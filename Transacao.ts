class Transacao {
  private tipo: string;
  private valor: number;
  private data: string;
  private transacoes: Transacao[] = [];

  constructor(tipo: string, valor: number, data: string) {
    this.tipo = tipo;
    this.valor = valor;
    this.data = data;
  }
  public getTipo(): string {
    return this.tipo;
  }
  public getValor(): number {
    return this.valor;
  }

  public adicionarTransacao(tipo: string, valor: number, data: string): void {
    const transacao: Transacao = new Transacao(tipo, valor, data);
    this.transacoes.push(transacao);
  }

  public getTransacoes(): Transacao[] {
    return this.transacoes;
  }

  public toString(): string {
    const valorFormatado = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(this.valor);
    return `${this.tipo}: ${valorFormatado}, Data: ${this.data}`;
  }
}

export default Transacao;
