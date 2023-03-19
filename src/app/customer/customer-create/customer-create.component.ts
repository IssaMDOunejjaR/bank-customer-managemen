import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomerService } from '../customer.service';
import { generateBankAccountNumber } from 'src/helpers';

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
})
export class CustomerCreateComponent {
  customerForm: FormGroup;

  constructor(
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

  submit() {
    this.customerService
      .postCustomer({
        ...this.customerForm.value,
        depositAmount: +this.customerForm.value.depositAmount,
        bankAccountNumber: generateBankAccountNumber(9),
        createdAt: new Date(),
        updatedAt: new Date(),
      })
      .subscribe({
        next: () => {
          this.customerForm.reset();
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
