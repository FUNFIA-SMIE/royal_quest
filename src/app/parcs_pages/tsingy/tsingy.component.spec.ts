import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TsingyComponent } from './tsingy.component';

describe('TsingyComponent', () => {
  let component: TsingyComponent;
  let fixture: ComponentFixture<TsingyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TsingyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TsingyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
