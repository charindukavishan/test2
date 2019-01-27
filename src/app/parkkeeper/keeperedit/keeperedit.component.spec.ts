import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KeepereditComponent } from './keeperedit.component';

describe('KeepereditComponent', () => {
  let component: KeepereditComponent;
  let fixture: ComponentFixture<KeepereditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeepereditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeepereditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
