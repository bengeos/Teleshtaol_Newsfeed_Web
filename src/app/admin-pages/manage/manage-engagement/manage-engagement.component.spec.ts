import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageEngagementComponent } from './manage-engagement.component';

describe('ManageEngagementComponent', () => {
  let component: ManageEngagementComponent;
  let fixture: ComponentFixture<ManageEngagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageEngagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageEngagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
