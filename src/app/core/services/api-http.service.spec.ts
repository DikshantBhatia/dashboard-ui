import { TestBed } from '@angular/core/testing';

import { ApiHttpService } from './api-http.service';
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('ApiHttpService', () => {
  let service: ApiHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(ApiHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
