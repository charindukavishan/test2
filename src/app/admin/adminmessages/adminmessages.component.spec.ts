import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminmessagesComponent } from './adminmessages.component';

describe('AdminmessagesComponent', () => {
  let component: AdminmessagesComponent;
  let fixture: ComponentFixture<AdminmessagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminmessagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminmessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
