import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewConsiliumsComponent } from './view-consiliums.component';

describe('ViewConsiliumsComponent', () => {
  let component: ViewConsiliumsComponent;
  let fixture: ComponentFixture<ViewConsiliumsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewConsiliumsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewConsiliumsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
