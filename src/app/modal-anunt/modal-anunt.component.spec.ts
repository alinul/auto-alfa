import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAnuntComponent } from './modal-anunt.component';

describe('ModalAnuntComponent', () => {
  let component: ModalAnuntComponent;
  let fixture: ComponentFixture<ModalAnuntComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalAnuntComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAnuntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
