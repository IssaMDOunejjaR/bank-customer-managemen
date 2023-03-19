import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer/cutomer.model';
import { CustomerService } from '../customer/customer.service';

@Component({
  selector: 'app-dahsboard',
  templateUrl: './dahsboard.component.html',
})
export class DahsboardComponent implements OnInit {
  customers: Customer[] = [];
  totalCustomers = 0;
  totalDeposits = 0;
  recentlyCreated: Customer[] = [];
  recentlyUpdated: Customer[] = [];

  constructor(private customerService: CustomerService) {}

  ngOnInit(): void {
    this.customerService.getCustomers().subscribe((customers) => {
      this.customers = customers;

      this.totalCustomers = customers.length;
      // this.totalDeposits = customers.reduce(
      //   (prev, current) => prev + current.depositAmount,
      //   0
      // );

      // this.recentlyCreated = customers
      //   .sort(
      //     (a, b) =>
      //       new Date(b.createdAt.toString()).getTime() -
      //       new Date(a.createdAt.toString()).getTime()
      //   )
      //   .slice(0, 5);

      // this.recentlyUpdated = customers
      //   .sort(
      //     (a, b) =>
      //       new Date(b.updatedAt.toString()).getTime() -
      //       new Date(a.updatedAt.toString()).getTime()
      //   )
      //   .slice(0, 5);
    });
  }
}
