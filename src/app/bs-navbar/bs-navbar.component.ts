import { AuthService } from './../auth.service';
import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AdminLoginComponent } from 'app/admin/login/login.component';

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.scss']
})
export class BsNavbarComponent {

  constructor(public auth: AuthService, private modalService: NgbModal) { 
   }

  logout() {
    this.auth.logout();
  }

  open() {
    const modalRef = this.modalService.open(AdminLoginComponent);
    modalRef.componentInstance.name = '';
  }
  
}
