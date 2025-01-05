import { TestBed } from '@angular/core/testing';

import { EstudentsService } from './estudents.service';

describe('EstudentsService', () => {
  let service: EstudentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EstudentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
