import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultsTestComponent } from './results-test.component';

describe('ResultsTestComponent', () => {
  let component: ResultsTestComponent;
  let fixture: ComponentFixture<ResultsTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultsTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultsTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
