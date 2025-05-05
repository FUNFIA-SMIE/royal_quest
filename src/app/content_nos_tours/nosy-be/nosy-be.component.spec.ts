import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NosyBEComponent } from './nosy-be.component';

describe('NosyBEComponent', () => {
  let component: NosyBEComponent;
  let fixture: ComponentFixture<NosyBEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NosyBEComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NosyBEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
