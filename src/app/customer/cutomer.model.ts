export interface Customer {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  gender: 'Male' | 'Female';
  address: string;
  phoneNumber: string;
  bankAccountNumber: number;
  depositAmount: number;
  accountType: 'Checking' | 'Saving';
  createdAt: Date;
  updatedAt: Date;
}
