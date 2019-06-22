import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRestaurantInfoComponent } from './edit-restaurant-info.component';

describe('EditRestaurantInfoComponent', () => {
  let component: EditRestaurantInfoComponent;
  let fixture: ComponentFixture<EditRestaurantInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditRestaurantInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditRestaurantInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
