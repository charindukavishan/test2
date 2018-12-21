import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminreceiveComponent } from './adminreceive.component';

describe('AdminreceiveComponent', () => {
  let component: AdminreceiveComponent;
  let fixture: ComponentFixture<AdminreceiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminreceiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminreceiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
