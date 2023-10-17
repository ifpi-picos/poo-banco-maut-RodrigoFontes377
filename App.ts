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
    const bairro = prompt("Bairro: ");
    const cidade = prompt("Cidade: ");
    const estado = prompt("Estado: ");
    const CEP = prompt("CEP: ");

    const endereco = new Endereco(rua, numero, bairro, cidade, estado, CEP);
    const cliente = new Cliente(nome, cpf, dataNascimento, endereco);
    const conta = new Conta("01", "01", 0, cliente);
    this.exibirMenu(cliente, conta);
  }

  exibirMenu(cliente: Cliente, conta: Conta) {
    while (true) {
      console.log("╔════════════════════════════════╗");
      console.log("║        Banco Maut - Menu       ║");
      console.log("╠════════════════════════════════╣");
      console.log("║ Escolha uma operação:          ║");
      console.log("║ 1. Exibir informações          ║");
      console.log("║ 2. Ver Saldo                   ║");
      console.log("║ 3. Depositar                   ║");
      console.log("║ 4. Sacar                       ║");
      console.log("║ 5. Transferir                  ║");
      console.log("║ 6. Exibir Extrato              ║");
      console.log("║ 7. Alterar Dados               ║");
      console.log("║ 8. Sair                        ║");
      console.log("╚════════════════════════════════╝");

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
          let endereco = cliente.getEndereco();
          console.log(
            endereco.getRua() +
              ", N°" +
              endereco.getNumero() +
              "* " +
              console.log(
                endereco.getBairro() +
                  "* " +
                  endereco.getCidade() +
                  "* " +
                  endereco.getEstado()
              )
          );

          console.log("CEP: " + endereco.getCEP());
          break;

        case 2:
          console.log("\nSaldo: R$" + conta.getSaldo());
          break;

        case 3:
          console.log("\n### Depósito ###");
          const valorDepositoStr = prompt("Valor a depositar: R$");
          const valorDeposito = parseFloat(valorDepositoStr);
          conta.depositar(valorDeposito);
          break;

        case 4:
          console.log("\n*** Saque ***");
          const valorSaqueStr = prompt("Valor a sacar: R$");
          const valorSaque = parseFloat(valorSaqueStr);
          conta.sacar(valorSaque);
          break;

        case 5:
          console.log("\n//-- Transferência --//");
          const numeroAgenciaDestino = prompt("Número da Agência de Destino: ");
          const numeroContaDestino = prompt("Número da Conta de Destino: ");
          const valorTransferenciaStr = prompt("Valor a transferir: R$");
          const valorTransferencia = parseFloat(valorTransferenciaStr);

          const eendereco = new Endereco(
            "123",
            "Avenida dos Pássaros",
            "Jardim Primavera",
            "Rio de Janeiro",
            "RJ",
            "23456-789"
          );

          const clienteDestino = new Cliente(
            "Carlos Pereira",
            "555.111.888-22",
            "10/12/1980",
            eendereco
          );

          const destino = new Conta(
            numeroAgenciaDestino,
            numeroContaDestino,
            valorTransferencia,
            clienteDestino
          );

          conta.transferir(destino, valorTransferencia);
          break;

        case 8:
          console.log("Até logo!");
          return;

        default:
          console.log("Opção inválida. Tente novamente.");
          break;
      }
    }
  }
}

new App();
