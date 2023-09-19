import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForLoopStudyComponent } from './for-loop-study.component';

describe('ForLoopStudyComponent', () => {
  let component: ForLoopStudyComponent;
  let fixture: ComponentFixture<ForLoopStudyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForLoopStudyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForLoopStudyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
