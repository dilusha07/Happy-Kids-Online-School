import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GradepageComponent } from './gradepage.component';

describe('GradepageComponent', () => {
  let component: GradepageComponent;
  let fixture: ComponentFixture<GradepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GradepageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GradepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
