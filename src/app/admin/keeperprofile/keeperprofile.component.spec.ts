import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KeeperprofileComponent } from './keeperprofile.component';

describe('KeeperprofileComponent', () => {
  let component: KeeperprofileComponent;
  let fixture: ComponentFixture<KeeperprofileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeeperprofileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeeperprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
