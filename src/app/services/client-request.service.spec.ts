/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ClientRequestService } from './client-request.service';

describe('Service: ClientRequest', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ClientRequestService]
    });
  });

  it('should ...', inject([ClientRequestService], (service: ClientRequestService) => {
    expect(service).toBeTruthy();
  }));
});
