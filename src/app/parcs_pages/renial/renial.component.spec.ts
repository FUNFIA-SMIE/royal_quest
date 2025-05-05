import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenialComponent } from './renial.component';

describe('RenialComponent', () => {
  let component: RenialComponent;
  let fixture: ComponentFixture<RenialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RenialComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RenialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
