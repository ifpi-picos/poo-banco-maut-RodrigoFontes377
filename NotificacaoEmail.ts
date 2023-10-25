import Notificacao from "./Notificacao";

class NotificacaoEmail implements Notificacao {
  enviaNotificacao(operacao: string, valor: number): void {
    console.log(
      `\nNotificação Enviada por Email - TIPO: ${operacao}, Valor: R$${valor.toFixed(
        2
      )}`
    );
  }
}

export default NotificacaoEmail;
