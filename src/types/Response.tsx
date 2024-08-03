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
