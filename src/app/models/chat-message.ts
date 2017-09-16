export enum MessageStatus {
  None,
  Sent,
  Processed
}

export interface ChatMessage {
  sender: string;
  messageContent: string;
  time: Date;
  status: MessageStatus;
}
