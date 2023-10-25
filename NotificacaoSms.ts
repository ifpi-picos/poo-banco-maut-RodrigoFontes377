import Notificacao from "./Notificacao";

class NotificacaoSMS implements Notificacao {
  enviaNotificacao(operacao: string, valor: number): void {
    console.log(
      `\nNotificação Enviada por SMS - TIPO: ${operacao}, Valor: R$${valor.toFixed(
        2
      )}`
    );
  }
}

export default NotificacaoSMS;
