import Notificacao from "./Notificacao";

class NotificacaoEmail implements Notificacao {
  enviaNotificacao(operacao: string, valor: number): void {
    console.log(
      `\nNotificação Enviada por email - Operação: ${operacao}, Valor: ${valor.toFixed(
        2
      )}`
    );
  }
}

export default NotificacaoEmail;
