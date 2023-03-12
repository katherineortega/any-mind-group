import { Component, ElementRef, EventEmitter, OnDestroy, OnInit, Output, Renderer2, ViewChild } from '@angular/core';
import { ChatImplementService } from "@implements/chat/chat-implement.service";
import { User } from "@models/user.model";
import { UserStoreImplementService } from "@implements/store/user-store-implement.service";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.sass']
})
export class UserListComponent implements OnInit, OnDestroy {
  public userCollection: User[] = [];
  public userSelected: User | null = null;

  public userListCardOpen: boolean = false;
  private unListener: (() => void) | undefined;

  @Output() user: EventEmitter<User> = new EventEmitter<User>();
  @Output() userList: EventEmitter<User[]> = new EventEmitter<User[]>();

  @ViewChild('userSelectedEdit', {static: false}) userSelectedEdit: ElementRef | undefined;
  @ViewChild('userListCard', {static: false}) userListCard: ElementRef | undefined;

  constructor(
    private chatImplement: ChatImplementService,
    private renderer: Renderer2,
    private userStoreImplement: UserStoreImplementService
  ) {
  }

  ngOnInit(): void {
    this.getUserList();
  }

  listenClickToCloseUserListCard() {
    this.unListener = this.renderer.listen('window', 'click', (event: Event) => {
      if (event.target !== this.userSelectedEdit?.nativeElement &&
        event.target !== this.userListCard?.nativeElement) {
        this.userListCardOpen = false;
        this.unListenClickToCloseUserListCard();
      }
    });
  }

  unListenClickToCloseUserListCard() {
    if (this.unListener) this.unListener();
  }

  getUserList() {
    this.chatImplement.userList()
      .subscribe((userList: User[]) => {
        this.userCollection = userList;
        this.userList.emit(this.userCollection);

        const storedUser = this.userStoreImplement.getStoredUser();
        this.setSelectedUser(storedUser ? storedUser : userList[0]);
      })
  }

  setSelectedUser(user: User) {
    if (this.userSelected?.id !== user.id) {
      this.userSelected = user;
      this.userStoreImplement.setStoredUser(user);
      this.user.emit(this.userSelected);
    }
  }

  changeSelectedUser(event: Event) {
    event.preventDefault();
    event.stopPropagation();
    this.userListCardOpen = !this.userListCardOpen;

    this.userListCardOpen ?
      this.listenClickToCloseUserListCard() :
      this.unListenClickToCloseUserListCard();
  }

  ngOnDestroy() {
    this.unListenClickToCloseUserListCard();
  }
}
