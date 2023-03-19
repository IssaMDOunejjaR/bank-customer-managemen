import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { CustomerComponent } from './customer.component';
import { CustomerCreateComponent } from './customer-create-route/customer-create.component';
import { CustomerEditComponent } from './customer-edit-route/customer-edit.component';
import { CustomerService } from './customer.service';
import { AppRoutingModule } from '../app-routing.module';
import { UtilsModule } from '../utils/utils.module';

@NgModule({
  declarations: [
    CustomerComponent,
    CustomerCreateComponent,
    CustomerEditComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    UtilsModule,
  ],
  providers: [CustomerService],
})
export class CustomerModule {}
