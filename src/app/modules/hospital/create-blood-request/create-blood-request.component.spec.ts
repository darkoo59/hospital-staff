import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBloodRequestComponent } from './create-blood-request.component';

describe('CreateBloodRequestComponent', () => {
  let component: CreateBloodRequestComponent;
  let fixture: ComponentFixture<CreateBloodRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateBloodRequestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateBloodRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
