import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DispprovedNewsComponent } from './dispproved-news.component';

describe('DispprovedNewsComponent', () => {
  let component: DispprovedNewsComponent;
  let fixture: ComponentFixture<DispprovedNewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DispprovedNewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DispprovedNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
