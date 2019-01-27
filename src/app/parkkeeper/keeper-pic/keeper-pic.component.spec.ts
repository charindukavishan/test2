import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KeeperPicComponent } from './keeper-pic.component';

describe('KeeperPicComponent', () => {
  let component: KeeperPicComponent;
  let fixture: ComponentFixture<KeeperPicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeeperPicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeeperPicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
