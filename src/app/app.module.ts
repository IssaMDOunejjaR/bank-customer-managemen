import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CustomerModule } from './customer/customer.module';
import { NavbarComponent } from './navbar/navbar.component';
import { DahsboardComponent } from './dahsboard/dahsboard.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NavbarLinkComponent } from './navbar/navbar-link/navbar-link.component';
import { UtilsModule } from './utils/utils.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DahsboardComponent,
    NotFoundComponent,
    NavbarLinkComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, CustomerModule, UtilsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
