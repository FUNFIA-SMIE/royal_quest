import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SainteMArieComponent } from './sainte-marie.component';

describe('SainteMArieComponent', () => {
  let component: SainteMArieComponent;
  let fixture: ComponentFixture<SainteMArieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SainteMArieComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SainteMArieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
