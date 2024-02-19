import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdribotComponent } from './adribot.component';

describe('AdribotComponent', () => {
  let component: AdribotComponent;
  let fixture: ComponentFixture<AdribotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdribotComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdribotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
