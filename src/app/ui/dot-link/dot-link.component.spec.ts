import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DotLinkComponent } from './dot-link.component';

describe('DotLinkComponent', () => {
  let component: DotLinkComponent;
  let fixture: ComponentFixture<DotLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DotLinkComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DotLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
