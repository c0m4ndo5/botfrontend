import { Injectable } from '@angular/core';
import { ChatMessage } from '../models/chat-message';
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
    this.messageHistory.push({
      sender: sender,
      messageContent: content,
      time: new Date()
    });

    this.http.post('api/message', {sender: 'test', message: content})
    .map((res: Response) => res.json())
    .subscribe(data => {
      this.messageHistory.push({
        sender: 'Bot',
        messageContent: data['reply'],
        time: new Date()
      });
    }); // need more examples/best practice?
    return 'not implemented';
  }
}

@Injectable()
export class MockChatService implements IChatService {

  messageHistory: ChatMessage[];
  constructor() {
    this.messageHistory = [{
      sender: 'you',
      messageContent: 'test',
      time: new Date()
    }];
   }

  sendMessage(_sender: string, _content: string): string {
    this.messageHistory.push({
      sender: _sender,
      messageContent: _content,
      time: new Date()
    });
    this.messageHistory.push({
      sender: 'Bot',
      messageContent: 'test',
      time: new Date()
    });
    return 'test';
  }
}
