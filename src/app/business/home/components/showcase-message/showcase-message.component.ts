import {
  ChangeDetectorRef,
  Component,
  ElementRef, EventEmitter,
  Input,
  OnChanges,
  OnInit, Output, SimpleChanges,
  ViewChild
} from '@angular/core';
import { Message } from "@models/message.model";
import { User } from "@models/user.model";

@Component({
  selector: 'app-showcase-message',
  templateUrl: './showcase-message.component.html',
  styleUrls: ['./showcase-message.component.sass']
})
export class ShowcaseMessageComponent implements OnInit, OnChanges {
  public moreMessagesLoader: boolean = false;

  @Input() messageList: Message[] = [];
  @Input() totalMoreMessages: number = 0;
  @Input() userList: User[] = [];
  @Input() userSelected: User | null | undefined;

  @Output() moreMessages: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() retryMessage: EventEmitter<Message> = new EventEmitter<Message>();

  @ViewChild('showcaseMessage') showcaseMessage: ElementRef | undefined;

  constructor(
    private changeDetector: ChangeDetectorRef
  ) {
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    this.changeDetector.detectChanges();

    const element = this.showcaseMessage?.nativeElement;
    if (element && !this.moreMessagesLoader) element.scrollTop = element.scrollHeight;
    if (this.moreMessagesLoader && this.totalMoreMessages >= 10) element.scrollTop = 20;
    this.moreMessagesLoader = false;
  }

  retryMessageEvent(message: Message) {
    this.retryMessage.emit(message);
  }

  scrollEvent() {
    const element = this.showcaseMessage?.nativeElement;
    const loadMoreMessages = this.totalMoreMessages >= 10 && element.scrollTop === 0;
    if (loadMoreMessages && !this.moreMessagesLoader) {
      this.moreMessagesLoader = loadMoreMessages
      this.moreMessages.emit(true);
    }
  }

}

