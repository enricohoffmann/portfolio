import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioMenuComponent } from './portfolio-menu.component';

describe('PortfolioMenuComponent', () => {
  let component: PortfolioMenuComponent;
  let fixture: ComponentFixture<PortfolioMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortfolioMenuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PortfolioMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
