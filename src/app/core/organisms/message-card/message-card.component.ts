import { Component, Input, OnInit } from '@angular/core';
import { User } from "@models/user.model";
import { IMessage } from "@interfaces/message.interface";

@Component({
  selector: 'app-message-card',
  templateUrl: './message-card.component.html',
  styleUrls: ['./message-card.component.sass']
})
export class MessageCardComponent implements OnInit {

  @Input() user: User | undefined;
  @Input() message: IMessage | undefined;
  @Input() direction: 'right' | 'left' = 'left';

  constructor() {
  }

  ngOnInit(): void {
  }

}
