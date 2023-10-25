export class Endereco {
  private logradouro: string;
  private numero: number;
  private bairro: string;
  private cidade: string;
  private UF: string;

  constructor(
    logradouro: string,
    numero: number,
    bairro: string,
    cidade: string,
    UF: string
  ) {
    this.logradouro = logradouro;
    this.numero = numero;
    this.bairro = bairro;
    this.cidade = cidade;
    this.UF = UF;
  }
  

  public getLogradouro(): string {
    return this.logradouro;
  }

  public setLogradouro(logradouro: string): void {
    this.logradouro = logradouro;
  }

  public getNumero(): number {
    return this.numero;
  }

  public setNumero(numero: number): void {
    this.numero = numero;
  }

  public getBairro(): string {
    return this.bairro;
  }

  public setBairro(bairro: string): void {
    this.bairro = bairro;
  }

  public getCidade(): string {
    return this.cidade;
  }

  public setCidade(cidade: string): void {
    this.cidade = cidade;
  }

  public getUF(): string {
    return this.UF;
  }

  public setUF(UF: string): void {
    this.UF = UF;
  }
}
