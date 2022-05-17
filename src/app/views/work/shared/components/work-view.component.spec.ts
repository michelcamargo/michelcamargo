import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkViewComponent } from './work-view.component';

describe('WorkViewComponent', () => {
  let component: WorkViewComponent;
  let fixture: ComponentFixture<WorkViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
