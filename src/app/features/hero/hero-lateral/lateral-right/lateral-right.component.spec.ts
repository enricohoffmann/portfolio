import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LateralRightComponent } from './lateral-right.component';

describe('LateralRightComponent', () => {
  let component: LateralRightComponent;
  let fixture: ComponentFixture<LateralRightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LateralRightComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LateralRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
