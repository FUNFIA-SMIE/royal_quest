import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OuestComponent } from './ouest.component';

describe('OuestComponent', () => {
  let component: OuestComponent;
  let fixture: ComponentFixture<OuestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OuestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OuestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
