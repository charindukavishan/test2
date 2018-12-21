import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkkeeperComponent } from './parkkeeper.component';

describe('ParkkeeperComponent', () => {
  let component: ParkkeeperComponent;
  let fixture: ComponentFixture<ParkkeeperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParkkeeperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParkkeeperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
