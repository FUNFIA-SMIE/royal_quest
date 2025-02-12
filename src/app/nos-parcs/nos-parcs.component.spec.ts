import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NosParcsComponent } from './nos-parcs.component';

describe('NosParcsComponent', () => {
  let component: NosParcsComponent;
  let fixture: ComponentFixture<NosParcsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NosParcsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NosParcsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
