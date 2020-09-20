import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateInspectionReportComponent } from './create-inspection-report.component';

describe('CreateInspectionReportComponent', () => {
  let component: CreateInspectionReportComponent;
  let fixture: ComponentFixture<CreateInspectionReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateInspectionReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateInspectionReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
