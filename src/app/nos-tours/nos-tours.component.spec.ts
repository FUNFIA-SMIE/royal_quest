import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NosToursComponent } from './nos-tours.component';

describe('NosToursComponent', () => {
  let component: NosToursComponent;
  let fixture: ComponentFixture<NosToursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NosToursComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NosToursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
