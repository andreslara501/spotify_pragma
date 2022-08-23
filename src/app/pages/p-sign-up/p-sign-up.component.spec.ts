import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PSignUpComponent } from './p-sign-up.component';

describe('PSignUpComponent', () => {
  let component: PSignUpComponent;
  let fixture: ComponentFixture<PSignUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PSignUpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PSignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
