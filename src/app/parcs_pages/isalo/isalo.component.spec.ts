import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IsaloComponent } from './isalo.component';

describe('IsaloComponent', () => {
  let component: IsaloComponent;
  let fixture: ComponentFixture<IsaloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IsaloComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IsaloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
