import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminsendComponent } from './adminsend.component';

describe('AdminsendComponent', () => {
  let component: AdminsendComponent;
  let fixture: ComponentFixture<AdminsendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminsendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminsendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
