import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyTipsComponent } from './monthly-tips.component';

describe('MonthlyTipsComponent', () => {
  let component: MonthlyTipsComponent;
  let fixture: ComponentFixture<MonthlyTipsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonthlyTipsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthlyTipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
