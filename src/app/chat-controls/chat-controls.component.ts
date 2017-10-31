import { Component, OnInit } from '@angular/core';
import { MockChatService, ChatService, IChatService } from '../services/chat-service.service';

@Component({
  selector: 'app-chat-controls',
  templateUrl: './chat-controls.component.html',
  styleUrls: ['./chat-controls.component.css']
})
export class ChatControlsComponent implements OnInit {
  inputMsg: string;
  constructor(private _chatService: MockChatService) { }

  ngOnInit() {
  }

  send() {
    this._chatService.sendMessage('you', this.inputMsg);
    this.inputMsg = '';
  }
}
