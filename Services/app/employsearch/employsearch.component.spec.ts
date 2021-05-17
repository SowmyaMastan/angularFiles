import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmploysearchComponent } from './employsearch.component';

describe('EmploysearchComponent', () => {
  let component: EmploysearchComponent;
  let fixture: ComponentFixture<EmploysearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmploysearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmploysearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
