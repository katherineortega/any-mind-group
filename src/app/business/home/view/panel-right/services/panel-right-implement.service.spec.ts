import { TestBed } from '@angular/core/testing';

import { PanelRightImplementService } from './panel-right-implement.service';

describe('PanelRightImplementService', () => {
  let service: PanelRightImplementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PanelRightImplementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
