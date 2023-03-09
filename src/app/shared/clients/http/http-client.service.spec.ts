import { HttpClientService } from './http-client.service';
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { TestBed } from "@angular/core/testing";
interface HttpGetResponse {id: number, name: string}
describe('HttpClientService', () => {
  let httpTestingController: HttpTestingController;
  let httpClientService: HttpClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HttpClientService]
    });

    httpTestingController = TestBed.inject(HttpTestingController);
    httpClientService = TestBed.inject(HttpClientService);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(httpClientService).toBeTruthy();
  });

  describe('#httpGet', () => {
    let expectedResponse: HttpGetResponse[];
    const mockGetApi: string = 'https//api.com';

    beforeEach(() => {
      httpClientService = TestBed.inject(HttpClientService);
      expectedResponse = [
        {id: 1, name: 'A'},
        {id: 2, name: 'B'},
      ] as HttpGetResponse[];
    });

    it('should return expected HttpGetResponse (called once)', () => {
      httpClientService.httpGet(mockGetApi).subscribe({
        next: response => expect(response)
          .withContext('should return expected response')
          .toEqual(expectedResponse),
        error: fail
      });

      const req = httpTestingController.expectOne(mockGetApi);
      expect(req.request.method).toEqual('GET');

      req.flush(expectedResponse);
    });

    it('should be OK returning no response', () => {
      httpClientService.httpGet<HttpGetResponse[]>(mockGetApi).subscribe({
        next: response => expect(response.length)
          .withContext('should have empty response array')
          .toEqual(0),
        error: fail
      });

      const req = httpTestingController.expectOne(mockGetApi);
      req.flush([]);
    });


  });
});
