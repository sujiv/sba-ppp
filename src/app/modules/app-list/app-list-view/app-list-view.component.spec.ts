import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppListViewComponent } from './app-list-view.component';

describe('AppListViewComponent', () => {
  let component: AppListViewComponent;
  let fixture: ComponentFixture<AppListViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppListViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
