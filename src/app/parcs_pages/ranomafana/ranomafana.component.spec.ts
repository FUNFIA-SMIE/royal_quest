import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RanomafanaComponent } from './ranomafana.component';

describe('RanomafanaComponent', () => {
  let component: RanomafanaComponent;
  let fixture: ComponentFixture<RanomafanaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RanomafanaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RanomafanaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
