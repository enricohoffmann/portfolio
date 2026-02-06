import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroMarqueeComponent } from './hero-marquee.component';

describe('HeroMarqueeComponent', () => {
  let component: HeroMarqueeComponent;
  let fixture: ComponentFixture<HeroMarqueeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroMarqueeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeroMarqueeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
