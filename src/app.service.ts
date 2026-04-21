import { Injectable, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AppService {
  constructor(
    @Inject('MQTT_CLIENT') private client: ClientProxy,
  ) {}

  sendLocation() {
    return this.client.emit('location/update', {
      deviceId: 'driver-1',
      lat: 32.0409,
      lng: 31.3785,
      timestamp: Date.now(),
    });
  }
}