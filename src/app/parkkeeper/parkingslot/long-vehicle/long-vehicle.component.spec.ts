import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LongVehicleComponent } from './long-vehicle.component';

describe('LongVehicleComponent', () => {
  let component: LongVehicleComponent;
  let fixture: ComponentFixture<LongVehicleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LongVehicleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LongVehicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
