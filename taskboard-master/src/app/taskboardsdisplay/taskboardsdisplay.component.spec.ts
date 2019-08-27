import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskboardsdisplayComponent } from './taskboardsdisplay.component';

describe('TaskboardsdisplayComponent', () => {
  let component: TaskboardsdisplayComponent;
  let fixture: ComponentFixture<TaskboardsdisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskboardsdisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskboardsdisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
