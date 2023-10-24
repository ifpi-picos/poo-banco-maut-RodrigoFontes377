import { Conta } from "./Conta";
import { Endereco } from "./Endereco";

export class Cliente {
  private nome: string;
  private CPF: string;
  private dataNascimento: Date;
  private endereco: Endereco;
  private contas: Conta[];

  constructor(
    nome: string,
    CPF: string,
    dataNascimento: Date,
    endereco: Endereco
  ) {
    this.nome = nome;
    this.CPF = CPF;
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

  public getCPF(): string {
    return this.CPF;
  }
  
  public getDataNascimento(): Date {
    return this.dataNascimento;
  }

  public setDataNascimento(dataNascimento: Date): void {
    this.dataNascimento = dataNascimento;
  }

  public getEndereco(): Endereco {
    return this.endereco;
  }

  public setEndereco(endereco: Endereco): void {
    this.endereco = endereco;
  }

  public getContas(): Conta[] {
    return this.contas;
  }

  public adicionarConta(conta: Conta): void {
    this.contas.push(conta);
  }
}
