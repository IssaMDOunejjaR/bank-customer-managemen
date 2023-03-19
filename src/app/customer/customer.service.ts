import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from './cutomer.model';
import { API_URL } from 'src/constants';

@Injectable()
export class CustomerService {
  constructor(private http: HttpClient) {}

  getCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(`${API_URL}/customers`);
  }

  getCustomerById(id: string): Observable<Customer> {
    return this.http.get<Customer>(`${API_URL}/customers/${id}`);
  }

  getCustomerByQuery(query: string): Observable<Customer[]> {
    return this.http.get<Customer[]>(`${API_URL}/customers?q=${query}`);
  }

  postCustomer(customer: Customer): Observable<Customer> {
    return this.http.post<Customer>(`${API_URL}/customers`, customer);
  }

  putCustomer(customer: Customer): Observable<Customer> {
    return this.http.put<Customer>(
      `${API_URL}/customers/${customer.id}`,
      customer
    );
  }

  deleteCustomer(customerId: number) {
    return this.http.delete(`${API_URL}/customers/${customerId}`);
  }
}
