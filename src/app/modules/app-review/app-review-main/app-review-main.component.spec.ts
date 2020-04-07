import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppReviewMainComponent } from './app-review-main.component';

describe('AppReviewMainComponent', () => {
  let component: AppReviewMainComponent;
  let fixture: ComponentFixture<AppReviewMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppReviewMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppReviewMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
