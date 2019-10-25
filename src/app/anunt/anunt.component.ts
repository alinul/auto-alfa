import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalAnuntComponent } from 'app/modal-anunt/modal-anunt.component';

@Component({
  selector: 'anunt',
  templateUrl: './anunt.component.html',
  styleUrls: ['./anunt.component.scss']
})
export class AnuntComponent  {

  constructor(private modalService: NgbModal) {}

  open() {
    const modalRef = this.modalService.open(ModalAnuntComponent, {size: 'lg'});
    modalRef.componentInstance.name = '';
  }
}
