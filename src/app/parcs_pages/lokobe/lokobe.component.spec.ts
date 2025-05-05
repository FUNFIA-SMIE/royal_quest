import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LokobeComponent } from './lokobe.component';

describe('LokobeComponent', () => {
  let component: LokobeComponent;
  let fixture: ComponentFixture<LokobeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LokobeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LokobeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
