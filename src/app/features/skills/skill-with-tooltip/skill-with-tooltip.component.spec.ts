import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillWithTooltipComponent } from './skill-with-tooltip.component';

describe('SkillWithTooltipComponent', () => {
  let component: SkillWithTooltipComponent;
  let fixture: ComponentFixture<SkillWithTooltipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillWithTooltipComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SkillWithTooltipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
