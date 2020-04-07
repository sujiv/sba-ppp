import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppListMainComponent } from './app-list-main.component';

describe('AppListMainComponent', () => {
  let component: AppListMainComponent;
  let fixture: ComponentFixture<AppListMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppListMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppListMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
