import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgrxHelpersComponent } from './ngrx-helpers.component';

describe('NgrxHelpersComponent', () => {
  let component: NgrxHelpersComponent;
  let fixture: ComponentFixture<NgrxHelpersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgrxHelpersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgrxHelpersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
