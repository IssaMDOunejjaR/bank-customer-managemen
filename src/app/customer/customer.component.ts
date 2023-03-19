import { Component, OnInit } from '@angular/core';
import { CustomerService } from './customer.service';
import { Customer } from './cutomer.model';
import { Subject, debounceTime, distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
})
export class CustomerComponent implements OnInit {
  customers: Customer[] = [];
  searchQuerySubject = new Subject<string>();

  constructor(private customerService: CustomerService) {
    this.searchQuerySubject
      .pipe(debounceTime(500), distinctUntilChanged())
      .subscribe((querySearch) => {
        this.searchCustomers(querySearch);
      });
  }

  ngOnInit(): void {
    this.customerService.getCustomers().subscribe((customers) => {
      this.customers = customers;
    });
  }

  onQuery(event: any) {
    this.searchQuerySubject.next(event.target.value);
  }

  searchCustomers(query: string) {
    this.customerService.getCustomerByQuery(query).subscribe((customers) => {
      this.customers = customers;
    });
  }

  delete(id: number) {
    this.customerService.deleteCustomer(id).subscribe({
      next: () => {
        this.customers = this.customers.filter(
          (customer) => customer.id !== id
        );
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
