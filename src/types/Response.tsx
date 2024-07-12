export type ResponseDto = {
  code: string;
  message: string;
};

export type LoginResponseProps = {
  responseDto: ResponseDto;
  token: string;
  emailAddress: string;
};
