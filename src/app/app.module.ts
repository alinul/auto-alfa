import { SignupFormComponent } from './signup-form/signup-form.component';
import { AuthGuardService as AuthGuardService } from './auth-guard.service';
import { AuthService } from './auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule} from 'angularfire2';
import { AngularFireDatabaseModule} from 'angularfire2/database';
import { AngularFireAuthModule, AngularFireAuth} from 'angularfire2/auth';
import { environment } from 'environments/environment';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { RentACarComponent } from './rent-a-car/rent-a-car.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminLoginComponent } from './admin/login/login.component';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AnuntComponent } from './anunt/anunt.component';
import { ModalAnuntComponent } from './modal-anunt/modal-anunt.component';
import { ContactComponent } from './contact/contact.component';
import { ModalTrimisCuSuccessComponent } from './modal-trimis-cu-success/modal-trimis-cu-success.component';
import { CereriComponent } from './admin/cereri/cereri.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupFormComponent,
    BsNavbarComponent,
    HomeComponent,
    ProductsComponent,
    RentACarComponent,
    AdminProductsComponent,
    AdminLoginComponent,
    AnuntComponent,
    ModalAnuntComponent,
    ContactComponent,
    ModalTrimisCuSuccessComponent,
    CereriComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent},
      { path: 'products', component: ProductsComponent},
      { path: 'rent-a-car', component: RentACarComponent},      
      { path: 'admin/login', component: AdminLoginComponent},
      { path: 'modal-anunt', component: ModalAnuntComponent},
      { path: 'modal-trimis-succes', component: ModalTrimisCuSuccessComponent},
      { path: 'contact', component: ContactComponent},

      { path: 'admin/cereri', component: CereriComponent, canActivate:[AuthGuardService]},
      { path: 'admin/products', component: AdminProductsComponent, canActivate:[AuthGuardService]}
    ]),
  
  ],
  providers: [
    AuthService,
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
