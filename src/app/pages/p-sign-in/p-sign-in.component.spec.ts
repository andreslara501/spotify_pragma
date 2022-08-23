import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PSignInComponent } from './p-sign-in.component';

describe('PSignInComponent', () => {
  let component: PSignInComponent;
  let fixture: ComponentFixture<PSignInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PSignInComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PSignInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
