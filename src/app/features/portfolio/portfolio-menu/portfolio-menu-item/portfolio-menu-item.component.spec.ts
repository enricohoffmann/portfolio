import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioMenuItemComponent } from './portfolio-menu-item.component';

describe('PortfolioMenuItemComponent', () => {
  let component: PortfolioMenuItemComponent;
  let fixture: ComponentFixture<PortfolioMenuItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortfolioMenuItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PortfolioMenuItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
