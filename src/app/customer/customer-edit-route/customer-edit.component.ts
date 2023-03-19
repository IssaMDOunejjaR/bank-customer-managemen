import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from '../cutomer.model';
import { CustomerService } from '../customer.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
})
export class CustomerEditComponent implements OnInit {
  customer?: Customer;
  customerForm: FormGroup;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private customerService: CustomerService
  ) {
    this.customerForm = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      gender: ['Male', [Validators.required]],
      address: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      depositAmount: [100, [Validators.required, Validators.min(100)]],
      accountType: ['Checking', [Validators.required]],
    });
  }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.customerService
        .getCustomerById(params['id'])
        .subscribe((customer) => {
          this.customer = customer;

          this.customerForm.setValue({
            firstName: customer.firstName,
            lastName: customer.lastName,
            gender: customer.gender,
            address: customer.address,
            phoneNumber: customer.phoneNumber,
            email: customer.email,
            depositAmount: customer.depositAmount,
            accountType: customer.accountType,
          });
        });
    });
  }

  submit() {
    this.customerService
      .putCustomer({
        ...this.customer,
        ...this.customerForm.value,
        depositAmount: +this.customerForm.value.depositAmount,
        updatedAt: new Date(),
      })
      .subscribe({
        next: () => {
          this.router.navigate(['/customers']);
        },
        error: (err) => {
          console.log(err);
        },
      });
  }

  getControl(name: string) {
    return this.customerForm.get(name);
  }
}
