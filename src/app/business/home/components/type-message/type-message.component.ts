import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TextStoreImplementService } from "@implements/store/text-store-implement.service";

@Component({
  selector: 'app-type-message',
  templateUrl: './type-message.component.html',
  styleUrls: ['./type-message.component.sass']
})
export class TypeMessageComponent implements OnInit {

  public value: string = '';
  @Input() disabled: boolean = false;
  @Output() message: EventEmitter<string> = new EventEmitter<string>()

  constructor(
    private textStoreImplement: TextStoreImplementService,
  ) {
  }

  ngOnInit(): void {
    const storedText = this.textStoreImplement.getStoredText();
    this.value = storedText || '';
  }

  saveText() {
    this.textStoreImplement.setStoredText(this.value);
  }

  submitText(event: Event) {
    event.preventDefault();
    event.stopPropagation();

    this.message.emit(this.value);
    this.value = '';
    this.textStoreImplement.setStoredText('');
  }

}
