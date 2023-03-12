import { TestBed } from '@angular/core/testing';

import { PanelLeftImplementService } from './panel-left-implement.service';

describe('PanelLeftImplementService', () => {
  let service: PanelLeftImplementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PanelLeftImplementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
