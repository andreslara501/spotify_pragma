import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MAccountButtonsComponent } from './m-account-buttons.component';

describe('MAccountButtonsComponent', () => {
  let component: MAccountButtonsComponent;
  let fixture: ComponentFixture<MAccountButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MAccountButtonsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MAccountButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
