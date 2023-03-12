import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from "@models/user.model";
import { Message } from "@models/message.model";

@Component({
  selector: 'app-message-card',
  templateUrl: './message-card.component.html',
  styleUrls: ['./message-card.component.sass']
})
export class MessageCardComponent implements OnInit {

  @Input() user: User | undefined;
  @Input() message: Message | undefined;
  @Input() direction: 'right' | 'left' = 'left';

  @Output() retry: EventEmitter<Message> = new EventEmitter<Message>();

  constructor() {
  }

  ngOnInit(): void {
  }

  retryEvent() {
    this.retry.emit(this.message);
  }

}
