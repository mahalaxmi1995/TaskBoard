import { TestBed } from '@angular/core/testing';

import { TaskboardsdataService } from './taskboardsdata.service';

describe('TaskboardsdataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TaskboardsdataService = TestBed.get(TaskboardsdataService);
    expect(service).toBeTruthy();
  });
});
