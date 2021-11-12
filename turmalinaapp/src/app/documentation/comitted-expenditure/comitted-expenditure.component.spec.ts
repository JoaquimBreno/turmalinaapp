import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComittedExpenditureComponent } from './comitted-expenditure.component';

describe('ComittedExpenditureComponent', () => {
  let component: ComittedExpenditureComponent;
  let fixture: ComponentFixture<ComittedExpenditureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComittedExpenditureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComittedExpenditureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
