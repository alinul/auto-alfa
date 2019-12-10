import { AuthService } from './../auth.service';
import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AdminLoginComponent } from 'app/admin/login/login.component';
import * as firebase from 'firebase';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs';
import { AppUser } from 'app/models/app-user';

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.scss']
})
export class BsNavbarComponent {

  appUser: AppUser;

  constructor(private auth: AuthService, private modalService: NgbModal) {     
    auth.appUser$.subscribe(appUser => this.appUser =appUser);
   }

  logout() {
    this.auth.logout();
  }

  open() {
    const modalRef = this.modalService.open(AdminLoginComponent);
    modalRef.componentInstance.name = '';
  }
  
}
