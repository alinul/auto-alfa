import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalTrimisCuSuccessComponent } from './modal-trimis-cu-success.component';

describe('ModalTrimisCuSuccessComponent', () => {
  let component: ModalTrimisCuSuccessComponent;
  let fixture: ComponentFixture<ModalTrimisCuSuccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalTrimisCuSuccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalTrimisCuSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
