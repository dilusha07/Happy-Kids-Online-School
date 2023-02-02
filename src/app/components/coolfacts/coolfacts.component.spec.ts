import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoolfactsComponent } from './coolfacts.component';

describe('CoolfactsComponent', () => {
  let component: CoolfactsComponent;
  let fixture: ComponentFixture<CoolfactsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoolfactsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoolfactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
