class Endereco {
  private rua: string;
  private bairro: string;
  private numero: string;
  private cidade: string;
  private estado: string;
  private CEP: string;
  private pais: string;

  constructor(
    rua: string,
    bairro: string,
    numero: string,
    cidade: string,
    estado: string,
    CEP: string,
    pais: string
  ) {
    this.rua = rua;
    this.bairro = bairro;
    this.numero = numero;
    this.cidade = cidade;
    this.estado = estado;
    this.CEP = CEP;
    this.pais = pais;
  }
}
