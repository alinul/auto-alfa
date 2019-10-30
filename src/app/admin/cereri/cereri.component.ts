import { Component } from '@angular/core';
import {NgbAccordionConfig} from '@ng-bootstrap/ng-bootstrap';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Component({
  selector: 'app-cereri',
  templateUrl: './cereri.component.html',
  styleUrls: ['./cereri.component.scss'],
  providers: [NgbAccordionConfig]
})
export class CereriComponent {

  cereri$: AngularFireList<any>;

  constructor(config: NgbAccordionConfig, db: AngularFireDatabase) { 
    config.closeOthers = true;
    config.type = 'light';
    
    this.cereri$ = db.list('/cereri');
    
     
  }

  cl(){
    console.log(this.cereri$);
  }

}
