import { Cliente } from "./Cliente";
import { Conta } from "./Conta";
import { Endereco } from "./Endereco";
import { Notificacao } from "./Notificacao";
import NotificacaoEmail from "./NotificacaoEmail";
import NotificacaoSMS from "./NotificacaoSms";

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
    const logradouro = prompt("Logradouro: ");
    const numero = prompt("Número: ");
    const bairro = prompt("Bairro: ");
    const cidade = prompt("Cidade: ");
    const UF = prompt("UF: ");

    const endereco = new Endereco(logradouro, numero, bairro, cidade, UF);
    const cliente = new Cliente(nome, cpf, dataNascimento, endereco);
    const conta = new Conta(0, cliente, new NotificacaoSMS());

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
      console.log("║ 0. Sair                        ║");
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
            endereco.getBairro() +
              "* " +
              endereco.getCidade() +
              "* " +
              endereco.getUF()
          );
          console.log(
            endereco.getLogradouro() + ", N°" + endereco.getNumero() + "* "
          );

          console.log("UF: " + endereco.getUF());
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
            "Avenida dos Pássaros",
            123,
            "Jardim Primavera",
            "Rio de Janeiro",
            "RJ"
          );

          const dataNascimentoString = "10/12/1980";
          const parts = dataNascimentoString.split("/");
          const dia = parseInt(parts[0], 10);
          const mes = parseInt(parts[1], 10) - 1;
          const ano = parseInt(parts[2], 10);

          const dataNascimento = new Date(ano, mes, dia);
          const clienteDestino = new Cliente(
            "Carlos Pereira",
            "555.111.888-22",
            dataNascimento,
            eendereco
          );

          const destino = new Conta(
            valorTransferencia,
            clienteDestino,
            new NotificacaoEmail()
          );

          conta.transferir(destino, valorTransferencia);
          break;

        case 6:
          console.log("\nExtrato de Transações:");
          conta.obterTransacoes().forEach((transacao) => {
            console.log(transacao);
          });
          break;

        case 0:
          console.log("Espero Que Tenha Gostado Do Sistema Bancário Maut!");
          return;

        default:
          console.log("Opção inválida. Tente novamente.");
          break;
      }
    }
  }
}

new App();
