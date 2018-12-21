import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KeeperregComponent } from './keeperreg.component';

describe('KeeperregComponent', () => {
  let component: KeeperregComponent;
  let fixture: ComponentFixture<KeeperregComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeeperregComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeeperregComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
