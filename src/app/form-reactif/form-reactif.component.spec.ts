import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormReactifComponent } from './form-reactif.component';

describe('FormReactifComponent', () => {
  let component: FormReactifComponent;
  let fixture: ComponentFixture<FormReactifComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormReactifComponent]
    });
    fixture = TestBed.createComponent(FormReactifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
