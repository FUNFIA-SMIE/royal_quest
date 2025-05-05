import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RakobaComponent } from './rakoba.component';

describe('RakobaComponent', () => {
  let component: RakobaComponent;
  let fixture: ComponentFixture<RakobaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RakobaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RakobaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
