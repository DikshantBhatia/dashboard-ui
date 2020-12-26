import {TestBed} from '@angular/core/testing';
import {AppConstants} from "./app-constants.service";


describe('AppConstantsService', () => {
  let service: AppConstants;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppConstants);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
