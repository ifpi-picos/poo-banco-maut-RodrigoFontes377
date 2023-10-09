import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

class App {
  constructor() {
    // Criação do cliente
    console.log(
      "Bem vindo ao Banco Maut. Insira seus dados para criar uma conta:"
    );
    rl.question("Nome: ", (nome) => {});
  }

  exibirMenu(cliente: Cliente, conta: Conta) {
    rl.question(
      "\n//-- Banco Maut --//\nEscolha uma operação:\n1 ** Minhas informações\n2 ** Saldo\n3 ** Depositar\n4  ** Sacar\n5 ** Transferir\n6 ** Extrato Bancário\n7 ** Mudança de Dados\n8 - Sair\nOpção: ",
      (opcaoStr) => {
        const opcao = parseInt(opcaoStr);

        switch (opcao) {
          case 1:
            console.log("\nInformações do Cliente e da Conta:");
            console.log("Nome: " + Cliente.getNome());
        }
      }
    );
  }
}

new App();
