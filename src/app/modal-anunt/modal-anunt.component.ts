import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-modal-anunt',
  templateUrl: './modal-anunt.component.html',
  styleUrls: ['./modal-anunt.component.scss'],
  providers: [NgbCarouselConfig]
})
export class ModalAnuntComponent {

  images = ["assets\\image\\0ff81c9a-12e0-429e-bc8c-2ccf4cf76389-1024x768.jpg","assets\\image\\1-1024x768.jpg","assets\\image\\0ff81c9a-12e0-429e-bc8c-2ccf4cf76389-1024x768.jpg"];


  constructor(private modalService: NgbModal, config: NgbCarouselConfig) { 
    config.interval = 0;
    config.wrap = false;
    config.keyboard = false;
    config.pauseOnHover = false; 
  }

  close() {
    this.modalService.dismissAll(ModalAnuntComponent);    
  }

}
