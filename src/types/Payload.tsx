export interface NewsletterPayload {
  emailAddress: string;
}

export interface GetProductDescriptionPayload {
  pageSize: number;
  pageNo: number;
  productCode: string;
}

export interface GetAProductByIdPayload {
  id: string;
}

export interface ContactUsPayload {
  firstName: string;
  lastName: string;
  emailAddress: string;
  phoneNumber: string;
  message: string;
}

export interface LoginPayload {
  userName: string;
  password: string;
}

export interface SignUpPayload {
  firstName: string;
  lastName: string;
  email: string;
  confirmPassword: string;
  userType: string;
  userName: string;
  password: string;
}

export interface CheckoutPayload {
  address: string;
  zipCode: string;
  state: string;
  city: string;
  userName: string;
  localGovernment: string;
}

export interface InitializeCardPayload {
  email: string;
  amount: number;
}
