import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { LocationController } from './location.controller';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'MQTT_CLIENT',
        transport: Transport.MQTT,
        options: {
         url: 'mqtt://127.0.0.1:1883'
        },
      },
    ]),
  ],
  controllers: [AppController,LocationController],
  providers: [AppService],
})
export class AppModule {}