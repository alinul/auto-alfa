import { AuthService } from './../auth.service';
import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AdminLoginComponent } from 'app/admin/login/login.component';
import * as firebase from 'firebase';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs';

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.scss']
})
export class BsNavbarComponent {

  user$: Observable<firebase.User>;

  constructor(private afAuth:AngularFireAuth, public auth: AuthService, private modalService: NgbModal) { 
    this.user$ = afAuth.authState;
   }

  logout() {
    this.auth.logout();
  }

  open() {
    const modalRef = this.modalService.open(AdminLoginComponent);
    modalRef.componentInstance.name = '';
  }
  
}
