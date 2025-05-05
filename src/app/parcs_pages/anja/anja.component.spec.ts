import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnjaComponent } from './anja.component';

describe('AnjaComponent', () => {
  let component: AnjaComponent;
  let fixture: ComponentFixture<AnjaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnjaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnjaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
