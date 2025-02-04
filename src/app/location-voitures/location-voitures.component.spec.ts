import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationVoituresComponent } from './location-voitures.component';

describe('LocationVoituresComponent', () => {
  let component: LocationVoituresComponent;
  let fixture: ComponentFixture<LocationVoituresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LocationVoituresComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocationVoituresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
