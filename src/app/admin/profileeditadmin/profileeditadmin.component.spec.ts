import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileeditadminComponent } from './profileeditadmin.component';

describe('ProfileeditadminComponent', () => {
  let component: ProfileeditadminComponent;
  let fixture: ComponentFixture<ProfileeditadminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileeditadminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileeditadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
