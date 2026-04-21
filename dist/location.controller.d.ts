import { MqttContext } from '@nestjs/microservices';
export declare class LocationController {
    handleLocation(data: any, context: MqttContext): {
        status: string;
    };
}
