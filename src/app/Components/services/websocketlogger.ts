import { Injectable } from "@angular/core";

@Injectable()
export class WebSocketLogger {
    public log(message: string) {
        console.log(message+ ' WebSocket');
    }
}