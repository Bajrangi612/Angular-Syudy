import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralPracticeComponent } from './general-practice.component';

describe('GeneralPracticeComponent', () => {
  let component: GeneralPracticeComponent;
  let fixture: ComponentFixture<GeneralPracticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralPracticeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeneralPracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
