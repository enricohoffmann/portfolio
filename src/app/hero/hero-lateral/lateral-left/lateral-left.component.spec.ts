import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LateralLeftComponent } from './lateral-left.component';

describe('LateralLeftComponent', () => {
  let component: LateralLeftComponent;
  let fixture: ComponentFixture<LateralLeftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LateralLeftComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LateralLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
