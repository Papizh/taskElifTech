import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotdogsListComponent } from './hotdogsList.component';

describe('HotdogsListComponent', () => {
  let component: HotdogsListComponent;
  let fixture: ComponentFixture<HotdogsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotdogsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotdogsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
