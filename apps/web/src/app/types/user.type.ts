export interface User {
  userName: string;
  email: string;
  password: string;
  token: string;
  role: string;
  detail: {
    dateOfBirth: Date;
    bio: string;
  };
}
