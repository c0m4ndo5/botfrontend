import { Component, OnInit } from '@angular/core';
import { MockChatService, ChatService, IChatService } from '../services/chat-service.service';

@Component({
  selector: 'app-chat-controls',
  templateUrl: './chat-controls.component.html',
  styleUrls: ['./chat-controls.component.css']
})
export class ChatControlsComponent implements OnInit {
  inputMsg: string;
  constructor(private _chatService: ChatService) { }

  ngOnInit() {
    this._chatService.postMessage('yuri', 'I see you\'ve made it to my "chat portfolio". Welcome! My name is Yuri Antin Wergrzn and ' +
      'although I\'m not here right now, please feel free to talk to my digital assistant! She will do her best to answer your ' +
      'questions about me!');
  }

  send() {
    this._chatService.sendMessage('you', this.inputMsg);
    this.inputMsg = '';
  }
}
