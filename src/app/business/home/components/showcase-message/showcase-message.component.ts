import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
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

  @Input() messageList: Message[] = [];
  @Input() loadingMessageList: Message[] = [];
  @Input() userList: User[] = [];
  @Input() userSelected: User | null | undefined;


  @ViewChild('showcaseMessage') showcaseMessage: ElementRef | undefined;

  constructor(
    private changeDetector: ChangeDetectorRef
  ) {
  }

  ngOnInit(): void {
  }

  ngOnChanges() {
    this.changeDetector.detectChanges();
  }

  user(message: Message): User | undefined {
    if (!!this.messageList?.length && !!this.userList?.length) {
      return this.userList.find((user) => user.id === message.userId);
    }
    return undefined;
  }

  direction(message: Message) {
    return this.userSelected?.id === message.userId ? 'right' : 'left';
  }


}

