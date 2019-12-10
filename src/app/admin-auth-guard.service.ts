import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()

export class AdminAuthGuardService implements CanActivate{

  constructor(private auth: AuthService) { }

  canActivate():any{
    this.auth.user$
      .map(user => {
        
      })
  }

}
