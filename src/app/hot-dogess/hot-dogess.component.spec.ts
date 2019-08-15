import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotDogessComponent } from './hot-dogess.component';

describe('HotDogessComponent', () => {
  let component: HotDogessComponent;
  let fixture: ComponentFixture<HotDogessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotDogessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotDogessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
