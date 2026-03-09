import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioDialogContentComponent } from './portfolio-dialog-content.component';

describe('PortfolioDialogContentComponent', () => {
  let component: PortfolioDialogContentComponent;
  let fixture: ComponentFixture<PortfolioDialogContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortfolioDialogContentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PortfolioDialogContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
