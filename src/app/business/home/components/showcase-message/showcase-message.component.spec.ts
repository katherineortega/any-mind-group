import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowcaseMessageComponent } from './showcase-message.component';

describe('ShowcaseMessageComponent', () => {
  let component: ShowcaseMessageComponent;
  let fixture: ComponentFixture<ShowcaseMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowcaseMessageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowcaseMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
