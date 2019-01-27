import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LorryComponent } from './lorry.component';

describe('LorryComponent', () => {
  let component: LorryComponent;
  let fixture: ComponentFixture<LorryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LorryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LorryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
