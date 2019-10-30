import { Component } from '@angular/core';
import { UserService } from './user.service';
import { AuthService } from './auth.service';
import { auth } from 'firebase';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'auto-alfa';

  constructor(private userService: UserService, private auth: AuthService, router: Router){
    auth.user$.subscribe(user => {
      if (user) {
        userService.save(user);
      }
    })
    
  }
  
  refresh(): void {
    window.location.reload();
}
}
