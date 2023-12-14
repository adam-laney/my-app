import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffirmationBuyComponent } from './affirmation-buy.component';

describe('AffirmationBuyComponent', () => {
  let component: AffirmationBuyComponent;
  let fixture: ComponentFixture<AffirmationBuyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AffirmationBuyComponent]
    });
    fixture = TestBed.createComponent(AffirmationBuyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
