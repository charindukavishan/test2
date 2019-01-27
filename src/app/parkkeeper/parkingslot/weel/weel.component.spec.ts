import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeelComponent } from './weel.component';

describe('WeelComponent', () => {
  let component: WeelComponent;
  let fixture: ComponentFixture<WeelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
