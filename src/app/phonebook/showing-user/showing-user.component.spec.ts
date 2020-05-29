import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowingUserComponent } from './showing-user.component';

describe('ShowingUserComponent', () => {
  let component: ShowingUserComponent;
  let fixture: ComponentFixture<ShowingUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowingUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowingUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
