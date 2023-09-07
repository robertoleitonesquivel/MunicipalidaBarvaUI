export interface UpdatePassword {
  Password: string;
  ConfirmPassword: string;
  Token: string
}

export interface UpdatePasswordSend {
  Password: string;
  Token: string
}
