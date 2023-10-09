class Cliente {
  private CPF: string;
  private nome: string;
  private contas: Conta[]; // Lista de contas
  private dataNascimento: string;
  private endereco: Endereco;
  static getNome: any;

  constructor(
    nome: string,
    CPF: string,
    dataNascimento: string,
    endereco: Endereco
  ) {
    this.CPF = CPF;
    this.nome = nome;
    this.dataNascimento = dataNascimento;
    this.endereco = endereco;
    this.contas = [];
  }
  public getNome(): string {
    return this.nome;
  }

  public setNome(nome: string): void {
    this.nome = nome;
  }
}
