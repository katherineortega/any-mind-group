import { TestBed } from '@angular/core/testing';

import { PanelLeftStoreService } from './panel-left-store.service';

describe('PanelLeftStoreService', () => {
  let service: PanelLeftStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PanelLeftStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
