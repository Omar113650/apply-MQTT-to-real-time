import { Controller } from '@nestjs/common';
import { MessagePattern, Payload, Ctx, MqttContext } from '@nestjs/microservices';

@Controller()
export class LocationController {

  @MessagePattern('location/update')
  handleLocation(
    @Payload() data: any,
    @Ctx() context: MqttContext,
  ) {

    const { deviceId, lat, lng, timestamp } = data;

    console.log(' Location:');
    console.log({ deviceId, lat, lng, timestamp });


    return { status: 'processed' };
  }
}