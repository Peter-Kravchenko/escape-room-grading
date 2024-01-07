export type TAuthData = {
  email: string;
  password: string;
};

export type TUser = {
  email: string;
  token: string;
};

export type TLoginFormValues = {
  email: string;
  password: string;
  agreement: boolean;
};
