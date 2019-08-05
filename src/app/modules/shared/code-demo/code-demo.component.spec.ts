import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeDemoComponent } from './code-demo.component';

describe('CodeDemoComponent', () => {
  let component: CodeDemoComponent;
  let fixture: ComponentFixture<CodeDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodeDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
