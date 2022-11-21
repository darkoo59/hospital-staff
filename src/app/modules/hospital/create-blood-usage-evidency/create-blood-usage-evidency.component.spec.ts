import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBloodUsageEvidencyComponent } from './create-blood-usage-evidency.component';

describe('CreateBloodUsageEvidencyComponent', () => {
  let component: CreateBloodUsageEvidencyComponent;
  let fixture: ComponentFixture<CreateBloodUsageEvidencyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateBloodUsageEvidencyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateBloodUsageEvidencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
