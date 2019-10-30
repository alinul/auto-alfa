import { Component } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { ModalTrimisCuSuccessComponent } from 'app/modal-trimis-cu-success/modal-trimis-cu-success.component';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss']
})
export class SignupFormComponent {

  cerere$;
  
  constructor(db: AngularFireDatabase, private modalService: NgbModal) {
    this.cerere$ = db.list('/cereri');
  }

  statusSell: boolean = false;
  statusRent: boolean = false;
  
  clickEventSell(){
      this.statusSell = !this.statusSell;   
  }
  clickEventRent(){
    this.statusRent = !this.statusRent;   
}

submit(e){
  this.cerere$.push(e.value);
  console.log(e.value);
}

showSuccess(){  
    let ngbModalOptions: NgbModalOptions = {
      backdrop : 'static',
      keyboard : false
    };
    this.modalService.open(ModalTrimisCuSuccessComponent, ngbModalOptions);
}
 
}
