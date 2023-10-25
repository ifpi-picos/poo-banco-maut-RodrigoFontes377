import { Cliente } from "./Cliente";
import { Conta } from "./Conta";
import { ContaCorrente } from "./ContaCorrente";
import { ContaPoupanca } from "./ContaPoupanca";
import { Endereco } from "./Endereco";
import { Notificacao } from "./Notificacao";
import NotificacaoEmail from "./NotificacaoEmail";
import NotificacaoSMS from "./NotificacaoSms";

const prompt = require("prompt-sync")();

class App {
  private contas: Conta[] = [];
  constructor() {
    this.contas = [];
  }
  public main() {
    const endereco1 = new Endereco(
      "Rua das Flores",
      123,
      "Jardim Primavera",
      "São Paulo",
      "SP"
    );
    const endereco2 = new Endereco(
      "Avenida Principal",
      456,
      "Centro",
      "Rio de Janeiro",
      "RJ"
    );
    const cliente = new Cliente(
      "João",
      "123.456.789-01",
      new Date("1990-01-01"),
      endereco1
    );
    const cliente2 = new Cliente(
      "Maria",
      "987.654.321-09",
      new Date("1985-05-15"),
      endereco2
    );
    const notificacao = new NotificacaoEmail();
    const contaPoupanca = new ContaPoupanca(cliente, notificacao);
    const contaCorrente = new ContaCorrente(cliente2, notificacao);

    console.log("Bem-vindo ao Banco Maut\n");
    this.MenuInicial();
  }

  public MenuInicial(): void {
    while (true) {
      console.log("Selecione uma opção:");
      console.log("1. Entrar");
      console.log("2. Criar Conta");
      console.log("3. Sair");

      const opcaoStr = prompt("Opção: ");
      const opcao = parseInt(opcaoStr);

      switch (opcao) {
        case 1:
          console.log("Você selecionou 'Entrar'.");
          console.log("Número da Agência: ");
          const numeroAgencia = Number(prompt());
          console.log("Número da Conta: ");
          const numeroConta = Number(prompt());
          const contaAutenticada = this.autenticarConta(
            numeroConta,
            numeroAgencia
          );

          if (contaAutenticada) {
            console.log("Conta autenticada com sucesso!");
            this.exibirMenu(contaAutenticada);
          } else {
            console.log(
              "Conta não encontrada. Verifique os dados e tente novamente."
            );
          }
          break;

        case 2:
          console.log("Você selecionou 'Criar Conta'.");
          this.criarConta();
          break;

        case 3:
          console.log("Você selecionou 'Sair'.");
          process.exit(0);

        default:
          console.log("Opção inválida. Tente novamente.");
          break;
      }
    }
  }

  public autenticarConta(
    numeroConta: number,
    numeroAgencia: number
  ): Conta | null {
    const contaEncontrada = this.contas.find(
      (conta) =>
        conta.getNumeroConta() === numeroConta &&
        conta.getNumeroAgencia() === numeroAgencia
    );

    return contaEncontrada || null;
  }

  exibirMenu(conta: Conta) {
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
      const cliente = conta.getCliente();

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
          console.log("Número da Agência de Destino: ");
          const numeroAgenciaDestino = Number(prompt());
          console.log("Número da Conta de Destino: ");
          const numeroContaDestino = Number(prompt());
          const contaDestino = this.autenticarConta(
            numeroContaDestino,
            numeroAgenciaDestino
          );
          const valorTransferenciaStr = prompt("Valor a transferir: R$");
          const valorTransferencia = parseFloat(valorTransferenciaStr);
          if (contaDestino != null) {
            conta.transferir(contaDestino, valorTransferencia);
          } else {
            console.log("Conta Destino não foi encontrada!");
          }
          break;

        case 6:
          console.log("\nExtrato de Transações:");
          conta.obterTransacoes().forEach((transacao) => {
            console.log(transacao);
          });
          break;

        case 7:
          console.log("\n-- Alterar Endereço --");
          const novoLogradouro = prompt("Novo Logradouro: ");
          const novoNumero = prompt("Novo Número: ");
          const novoBairro = prompt("Novo Bairro: ");
          const novaCidade = prompt("Nova Cidade: ");
          const novoUF = prompt("Nova UF: ");

          const novoEndereco = new Endereco(
            novoLogradouro,
            novoNumero,
            novoBairro,
            novaCidade,
            novoUF
          );

          cliente.setEndereco(novoEndereco);

          console.log("Endereço atualizado com sucesso!");
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
  escolherNotificacao(): Notificacao {
    console.log("\nEscolha o meio de notificação:");
    console.log("1 - Email");
    console.log("2 - SMS");
    const meioNotificacaoOpcao = parseInt(prompt("Opção: "));

    if (meioNotificacaoOpcao === 1) {
      return new NotificacaoEmail();
    } else if (meioNotificacaoOpcao === 2) {
      return new NotificacaoSMS();
    } else {
      console.log("Opção inválida. Usando notificação por padrão (Email).");
      return new NotificacaoEmail();
    }
  }
  criarCliente(): Cliente {
    console.log("\n//-- Cadastro de Cliente --//");
    const nome = prompt("Nome do Cliente: ");
    const cpf = prompt("CPF: ");
    console.log("Digite sua data de nascimento(dd/MM/yyyy):");
    const dataNascimentoStr = prompt();
    const dataNascimento = new Date(dataNascimentoStr);

    console.log("\nEndereço do Cliente:");
    const rua = prompt("Rua: ");
    const numero = parseInt(prompt("Número: "));
    const bairro = prompt("Bairro: ");
    const cidade = prompt("Cidade: ");
    const UF = prompt("UF: ");

    const endereco = new Endereco(rua, numero, bairro, cidade, UF);
    const cliente = new Cliente(nome, cpf, dataNascimento, endereco);

    return cliente;
  }

  criarConta(): void {
    console.log("Por favor, insira seus dados para criar uma conta:");
    const notificacao = this.escolherNotificacao();
    const cliente = this.criarCliente();

    console.log("\nEscolha o tipo de conta:");
    console.log("1 - Conta Corrente");
    console.log("2 - Conta Poupança");
    const tipoContaOpcao = parseInt(prompt("Opção: "));

    if (tipoContaOpcao === 1) {
      const novaConta = new ContaCorrente(cliente, notificacao);
      this.contas.push(novaConta);
      console.log(
        novaConta.getNumeroAgencia(),
        "\n",
        novaConta.getNumeroConta()
      );
      console.log("Conta cadastrada com sucesso.");
    } else if (tipoContaOpcao === 2) {
      const novaConta = new ContaPoupanca(cliente, notificacao);
      this.contas.push(novaConta);
      console.log(
        novaConta.getNumeroAgencia(),
        "\n",
        novaConta.getNumeroConta()
      );
      console.log("Conta cadastrada com sucesso.");
    }
  }
}

new App();
