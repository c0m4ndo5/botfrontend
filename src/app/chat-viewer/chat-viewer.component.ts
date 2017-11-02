import { Component, OnInit } from '@angular/core';
import { ViewerData } from '../models/viewer-data';
import { MockChatService, ChatService, IChatService } from '../services/chat-service.service';
import { ChatMessage } from '../models/chat-message';

@Component({
  selector: 'app-chat-viewer',
  templateUrl: './chat-viewer.component.html',
  styleUrls: ['./chat-viewer.component.css']
})
export class ChatViewerComponent implements OnInit {
  viewData: ViewerData;
  constructor(private chatService: ChatService) {
    this.viewData = {
      messages : chatService.messageHistory
    };
   }

  ngOnInit() {
  }
}
