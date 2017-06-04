import { TestBed, inject } from '@angular/core/testing';

import { CongressService } from './congress.service';

describe('CongressService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CongressService]
    });
  });

  it('should ...', inject([CongressService], (service: CongressService) => {
    expect(service).toBeTruthy();
  }));
});
