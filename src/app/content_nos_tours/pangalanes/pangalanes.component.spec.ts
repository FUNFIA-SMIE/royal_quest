import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PangalanesComponent } from './pangalanes.component';

describe('PangalanesComponent', () => {
  let component: PangalanesComponent;
  let fixture: ComponentFixture<PangalanesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PangalanesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PangalanesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
