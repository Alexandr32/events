import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EventsGateway } from './websocket/events.gateway';

@Module({
  imports: [
    
  ],
  controllers: [
    AppController
  ],
  providers: [
    AppService,
    EventsGateway
  ],
})
export class AppModule {}
