import { Injectable } from '@angular/core';
import { ChatMessage, MessageStatus } from '../models/chat-message';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';


export interface IChatService {
  messageHistory: ChatMessage[];
  sendMessage(sender: string, content: string): string;
  postMessage(sender: string, content: string): void;
}

@Injectable()
export class ChatService implements IChatService {

  messageHistory: ChatMessage[];
  constructor(private http: Http) {
    this.messageHistory = [];
  }

  postMessage(_sender: string, _content: string): void {
    this.messageHistory.push({
      sender: _sender,
      messageContent: _content,
      time: new Date(),
      status: MessageStatus.Processed
    });
  }

  sendMessage(sender: string, content: string): string {
    const msgSend: ChatMessage = {
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

   postMessage(_sender: string, _content: string): void {
    this.messageHistory.push({
      sender: _sender,
      messageContent: _content,
      time: new Date(),
      status: MessageStatus.Processed
    });
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
      messageContent: 'test echo mode: ' + _content,
      // 'test with image: <img src="https://tce-live2.s3.amazonaws.com/media/media/be7a97e5-19d2-4df5-b348-a549dd5b3fe7.jpg" />' ,
      time: new Date(),
      status: MessageStatus.None
    });
    return 'test';
  }
}
