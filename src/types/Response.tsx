/* eslint-disable @typescript-eslint/no-explicit-any */
export type ResponseDto = {
  code: string;
  message: string;
};

export type LoginResponseProps = {
  responseDto: ResponseDto;
  token: string;
  emailAddress: string;
};

export type NewsletterResponse = {
  responseDto: ResponseDto;
};

export type DocumentList = {
  id: number;
  version: number;
  delFlag: string;
  createdOn: string;
  modifiedOn: string;
  imageUrl: string;
};

export type ProductDescription = {
  id: number;
  amount: number;
  description: string;
  currency: string;
  imageUrl: string;
  productCode: string;
  code: string;
  location: string;
  productCategoryCode: string;
  recent: string;
  multipartFile: string;
  productCodeList: string;
  productSize: string;
  price: string;
  multipartFileList: string;
  imagesList: DocumentList[];
  availableQuantity: string;
  landDocs: string;
  percentageDiscount: string;
  landDoc: DocumentList[];
  videoList: any;
  count?: number;
};

export type GetProductDescriptionResponse = {
  responseDto: ResponseDto;
  productDescriptionDtoList: ProductDescription[];
};

export type GetAProductByIdResponse = {
  responseDto: ResponseDto;
  productDescriptionDto: ProductDescription;
};

export type ContactUsResponse = {
  responseDto: ResponseDto;
};

export type SignUpResponse = {
  responseDto: ResponseDto;
  userDto: any;
  userDtoList: any;
};

export type LogOutResponse = {
  resp: ResponseDto;
  firstTimeLogin: boolean;
};

export type AddDeliveryResponse = {
  responseDto: ResponseDto;
  deliverydto: any;
};

export type DeliveryDto = {
  firstName: string;
  lastName: string;
  address: string;
  zipCode: string;
  state: string;
  city: string;
  userName: string;
  localGovernment: string;
  feeDto: {
    localGovArea: string;
    doorDeliveryFee: string;
    deliveryPeriod: string;
  };
};

export type CheckoutResponse = {
  responseDto: ResponseDto;
  deliverydto: DeliveryDto;
};

export type InitializeTransactionProps = {
  status: boolean;
  message: string;
  email: any;
  data: {
    amount: any;
    currency: any;
    transaction_date: any;
    metadata: any;
    id: any;
    status: any;
    access_code: string;
    reference: string;
    domain: any;
    gateway_response: any;
    message: any;
    channel: any;
    ip_address: any;
    authorization_url: string;
    fees: any;
    plan: any;
    paid_at: any;
    requested_amount: any;
    created_at: any;
    history: any;
    authorization: any;
    customer: any;
  };
};

export type InitializeCardResponse = {
  responseDto: ResponseDto;
  initializeTransactionResponse: InitializeTransactionProps;
  paystackVerifyTransactionResponse: any;
};
