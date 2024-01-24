import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CareerInnerComponent } from './career-inner.component';

describe('CareerInnerComponent', () => {
  let component: CareerInnerComponent;
  let fixture: ComponentFixture<CareerInnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CareerInnerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CareerInnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
