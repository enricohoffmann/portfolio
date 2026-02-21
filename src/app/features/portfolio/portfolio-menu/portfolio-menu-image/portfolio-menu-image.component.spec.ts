import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioMenuImageComponent } from './portfolio-menu-image.component';

describe('PortfolioMenuImageComponent', () => {
  let component: PortfolioMenuImageComponent;
  let fixture: ComponentFixture<PortfolioMenuImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortfolioMenuImageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PortfolioMenuImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
