import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module'

import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {

  const app = await NestFactory.create(AppModule);

  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.MQTT,
    options: {
      url: 'mqtt://127.0.0.1:1883',
    },
  });

// server run  http://localhost:3000
  await app.startAllMicroservices(); 
  await app.listen(3000);



}

bootstrap();