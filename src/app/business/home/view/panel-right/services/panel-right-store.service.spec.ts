import { TestBed } from '@angular/core/testing';

import { PanelRightStoreService } from './panel-right-store.service';

describe('PanelRightStoreService', () => {
  let service: PanelRightStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PanelRightStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
