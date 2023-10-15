export class Transacao {
  transacoes: string[];

  constructor() {
    this.transacoes = [];
  }

  adicionarTransacao(mensagem: string): void {
    this.transacoes.push(mensagem);
  }

 
  getTransacoes(): string[] {
    return this.transacoes;
    }
}