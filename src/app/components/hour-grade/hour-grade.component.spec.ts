import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HourGradeComponent } from './hour-grade.component';

describe('HourGradeComponent', () => {
  let component: HourGradeComponent;
  let fixture: ComponentFixture<HourGradeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HourGradeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HourGradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
