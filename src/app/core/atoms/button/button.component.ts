import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.sass']
})
export class ButtonComponent implements OnInit {

  @Input() id: string = 'button';
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  @Input() class: string = '';
  @Input() disabled: boolean = false;

  @Output() click: EventEmitter<Event> = new EventEmitter<Event>();

  constructor() {
  }

  ngOnInit(): void {
  }

  eventClick(event: Event): void {
    if (this.type === "button") {
      event.preventDefault();
    }
    event.stopPropagation();
    this.click.emit(event);
  }
}
