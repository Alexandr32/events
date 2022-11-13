import { MessageBody, SubscribeMessage, WebSocketGateway, WsResponse } from '@nestjs/websockets';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class EventsGateway {

  @SubscribeMessage('eventsChat')
  handleEvent(@MessageBody() data: Message): WsResponse<Message> {

    if (data.type === TypeMessageEnum.connectUser) {
      data.message = 'Вошел в чат'
    }

    return { event: 'eventsChat', data: data }
  }

}

export class User {
  name: string
}

enum TypeMessageEnum {
  connectUser = 'connectUser',
  messageUser = 'messageUser'
}

export interface Message {
  type: TypeMessageEnum
  user: User
  message: string
}