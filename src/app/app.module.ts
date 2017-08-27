import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { ChatViewerComponent } from './chat-viewer/chat-viewer.component';
import { ChatControlsComponent } from './chat-controls/chat-controls.component';
import { MockChatService, ChatService, IChatService } from './services/chat-service.service';

@NgModule({
  declarations: [
    AppComponent,
    ChatViewerComponent,
    ChatControlsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [ MockChatService, ChatService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
