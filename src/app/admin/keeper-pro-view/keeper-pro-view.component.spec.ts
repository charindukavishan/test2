import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KeeperProViewComponent } from './keeper-pro-view.component';

describe('KeeperProViewComponent', () => {
  let component: KeeperProViewComponent;
  let fixture: ComponentFixture<KeeperProViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeeperProViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeeperProViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
