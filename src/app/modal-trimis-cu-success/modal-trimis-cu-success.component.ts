import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-trimis-cu-success',
  templateUrl: './modal-trimis-cu-success.component.html',
  styleUrls: ['./modal-trimis-cu-success.component.scss']
})
export class ModalTrimisCuSuccessComponent implements OnInit {
  

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  close() {
    this.modalService.dismissAll(ModalTrimisCuSuccessComponent);    
  }

}
