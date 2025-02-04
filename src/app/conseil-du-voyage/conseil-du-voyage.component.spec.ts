import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConseilDuVoyageComponent } from './conseil-du-voyage.component';

describe('ConseilDuVoyageComponent', () => {
  let component: ConseilDuVoyageComponent;
  let fixture: ComponentFixture<ConseilDuVoyageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConseilDuVoyageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConseilDuVoyageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
