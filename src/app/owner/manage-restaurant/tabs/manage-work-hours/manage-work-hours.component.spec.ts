import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageWorkHoursComponent } from './manage-work-hours.component';

describe('ManageWorkHoursComponent', () => {
  let component: ManageWorkHoursComponent;
  let fixture: ComponentFixture<ManageWorkHoursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageWorkHoursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageWorkHoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
