class Cliente {
  private nome: string;
  private CPF: string;
  private dataNascimento: string;
  private contas: Conta[]; // Lista de contas

  constructor(nome: string, CPF: string, dataNascimento: string, o) {
    this.nome = nome;
    this.CPF = CPF;
    this.dataNascimento = dataNascimento;
  }
}
