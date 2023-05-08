import { TestBed } from '@angular/core/testing';

import { ExpenselistService } from './expenselist.service';

describe('ExpenselistService', () => {
  let service: ExpenselistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExpenselistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
