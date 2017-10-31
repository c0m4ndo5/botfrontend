import { Injectable } from '@angular/core';
import { ChatMessage, MessageStatus } from '../models/chat-message';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';


export interface IChatService {
  messageHistory: ChatMessage[];
  sendMessage(sender: string, content: string): string;
}

@Injectable()
export class ChatService implements IChatService {
  messageHistory: ChatMessage[];
  constructor(private http: Http) {
    this.messageHistory = [];
  }

  sendMessage(sender: string, content: string): string {
    let msgSend: ChatMessage = {
      sender: sender,
      messageContent: content,
      time: new Date(),
      status: MessageStatus.Sent
    };

    this.messageHistory.push(msgSend);

    this.http.post('api/message', {sender: 'test', message: content})
    .map((res: Response) => res.json())
    .subscribe(data => {
      this.messageHistory.push({
        sender: 'Bot',
        messageContent: data['reply'],
        time: new Date(),
        status: MessageStatus.Processed
      });
      msgSend.status = MessageStatus.Processed;
    }); // need more examples/best practice?
    return 'not implemented';
  }
}

@Injectable()
export class MockChatService implements IChatService {

  messageHistory: ChatMessage[] = [];
  constructor() {
   }

  sendMessage(_sender: string, _content: string): string {
    this.messageHistory.push({
      sender: _sender,
      messageContent: _content,
      time: new Date(),
      status: MessageStatus.Processed
    });
    this.messageHistory.push({
      sender: 'Bot',
      messageContent: 'test with image: <img src="https://www.banffadventures.com/DesktopModules/PTI/TileView/images/57/tb_luxury.jpg" />' ,
      time: new Date(),
      status: MessageStatus.None
    });
    return 'test';
  }
}
