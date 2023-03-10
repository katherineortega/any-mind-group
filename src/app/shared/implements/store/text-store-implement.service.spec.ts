import { TestBed } from "@angular/core/testing";
import { TextStoreImplementService } from "@implements/store/text-store-implement.service";

describe('TextStoreImplementService', () => {
  let textStoreImplementService: TextStoreImplementService;

  beforeEach(() => {

    TestBed.configureTestingModule({
      providers: [
        TextStoreImplementService
      ]
    });
    textStoreImplementService = TestBed.inject(TextStoreImplementService);
  });

  it('should be created', () => {
    expect(textStoreImplementService).toBeTruthy();
  });
});
