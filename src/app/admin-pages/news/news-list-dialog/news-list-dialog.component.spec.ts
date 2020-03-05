import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsListDialogComponent } from './news-list-dialog.component';

describe('NewsListDialogComponent', () => {
  let component: NewsListDialogComponent;
  let fixture: ComponentFixture<NewsListDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsListDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsListDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
