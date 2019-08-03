import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResolvingComponent } from './resolving.component';

describe('ResolvingComponent', () => {
  let component: ResolvingComponent;
  let fixture: ComponentFixture<ResolvingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResolvingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResolvingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
