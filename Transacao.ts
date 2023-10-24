export class Transacao {
  private tipo: string;
  private valor: number;
  private data: Date;

  constructor(tipo: string, valor: number) {
    this.tipo = tipo;
    this.valor = valor;
    this.data = new Date();
  }
  public getTipo() {
    return this.tipo;
  }
  public getValor() {
    return this.valor;
  }
  public getData() {
    return this.data;
  }
}
