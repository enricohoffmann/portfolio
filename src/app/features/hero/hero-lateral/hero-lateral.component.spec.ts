import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroLateralComponent } from './hero-lateral.component';

describe('HeroLateralComponent', () => {
  let component: HeroLateralComponent;
  let fixture: ComponentFixture<HeroLateralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroLateralComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeroLateralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
