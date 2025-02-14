import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AndasibeComponent } from './andasibe.component';

describe('AndasibeComponent', () => {
  let component: AndasibeComponent;
  let fixture: ComponentFixture<AndasibeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AndasibeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AndasibeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
