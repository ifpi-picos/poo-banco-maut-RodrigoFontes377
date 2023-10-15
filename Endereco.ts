export class Endereco {
  constructor(
    public rua: string,
    public numero: string,
    public complemento: string,
    public bairro: string,
    public cidade: string,
    public estado: string,
    public cep: string
  ) {}

  getRua() {
    return this.rua;
  }

  getNumero() {
    return this.numero;
  }

  getComplemento() {
    return this.complemento;
  }

  getBairro() {
    return this.bairro;
  }

  getCidade() {
    return this.cidade;
  }

  getEstado() {
    return this.estado;
  }


  getCEP() {
    return this.cep;
  }
}
