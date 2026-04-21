import { ClientProxy } from '@nestjs/microservices';
export declare class AppService {
    private client;
    constructor(client: ClientProxy);
    sendLocation(): import("rxjs").Observable<any>;
}
