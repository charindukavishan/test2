import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewaddedparksComponent } from './newaddedparks.component';

describe('NewaddedparksComponent', () => {
  let component: NewaddedparksComponent;
  let fixture: ComponentFixture<NewaddedparksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewaddedparksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewaddedparksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
