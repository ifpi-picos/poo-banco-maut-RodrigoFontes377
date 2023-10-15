import { Cliente } from "./Cliente";
import { Conta } from "./Conta";
import { Endereco } from "./Endereco";

const prompt = require("prompt-sync")();

class App {
  constructor() {
    this.iniciar();
  }

  iniciar() {
    console.log(
      "Bem-vindo ao Banco Maut\nPor favor, insira seus dados para criar uma conta:"
    );
    const nome = prompt("Nome: ");
    const cpf = prompt("CPF: ");
    const dataNascimento = prompt("Data de Nascimento: ");
    const rua = prompt("Rua: ");
    const numero = prompt("Número: ");
    const complemento = prompt("Complemento: ");
    const bairro = prompt("Bairro: ");
    const cidade = prompt("Cidade: ");
    const estado = prompt("Estado: ");
    const CEP = prompt("CEP: ");

    const endereco = new Endereco(
      rua,
      numero,
      complemento,
      bairro,
      cidade,
      estado,
      CEP
    );
    const cliente = new Cliente(nome, cpf, dataNascimento, endereco);
    const conta = new Conta("001", "001", 0, cliente);
    this.exibirMenu(cliente, conta);
  }

  exibirMenu(cliente: Cliente, conta: Conta) {
    while (true) {
      console.log("\n//-- Banco Maut --//");
      console.log("Escolha uma operação:");
      console.log("1 - Exibir informações");
      console.log("2 - Ver Saldo");
      console.log("3 - Depositar");
      console.log("4 - Sacar");
      console.log("5 - Transferir");
      console.log("6 - Exibir Extrato");
      console.log("7 - Alterar Dados");
      console.log("8 - Sair");

      const opcaoStr = prompt("Opção: ");
      const opcao = parseInt(opcaoStr);

      switch (opcao) {
        case 1:
          console.log("\nInformações do Cliente e da Conta:");
          console.log("Nome: " + cliente.getNome());
          console.log("CPF: " + cliente.getCPF());
          console.log("Data de Nascimento: " + cliente.getDataNascimento());
          console.log("Número da Agência: " + conta.getNumeroAgencia());
          console.log("Número da Conta: " + conta.getNumeroConta());
          console.log("Saldo: R$" + conta.getSaldo());

          console.log("\nEndereço do Cliente:");
          const endereco = cliente.getEndereco();
          console.log(
            endereco.getRua() +
              ", N°" +
              endereco.getNumero() +
              ", Complemento: " +
              endereco.getComplemento()
          );
          console.log(
            endereco.getBairro() +
              ", " +
              endereco.getCidade() +
              ", " +
              endereco.getEstado()
          );
          console.log("CEP: " + endereco.getCEP());
          break;

        case 2:
          console.log("\nSaldo: R$" + conta.getSaldo());
          break;

        case 8:
          console.log("Até Mais, Espero que tenha gostado!");
          return;

        default:
          console.log("Opção inválida. Tente novamente.");
          break;
      }
    }
  }
}

new App();
