    rl.question(
      "\n//-- Banco Maut --//\nEscolha uma operação:\n1 ** Minhas informações\n2 ** Saldo\n3 ** Depositar\n4  ** Sacar\n5 ** Transferir\n6 ** Extrato Bancário\n7 ** Mudança de Dados\n8 - Sair\nOpção: ",
      (opcaoStr: string) => {
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
