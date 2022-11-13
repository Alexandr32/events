import { MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer, WsResponse } from '@nestjs/websockets';
import { Server } from 'socket.io';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class EventsGateway {

  @WebSocketServer()
  server: Server;

  @SubscribeMessage('eventsChat')
  handleEvent(@MessageBody() data: Message) {

    if (data.type === TypeMessageEnum.connectUser) {
      data.message = 'Вошел в чат'
    }

    this.server.emit('eventsChat', data)
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