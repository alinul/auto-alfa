import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'


@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss']
})
export class SignupFormComponent {
  
  statusSell: boolean = false;
  statusRent: boolean = false;
  
  clickEventSell(){
      this.statusSell = !this.statusSell;   
  }
  clickEventRent(){
    this.statusRent = !this.statusRent;   
}

log(e){
  console.log(e);
}
 
}
