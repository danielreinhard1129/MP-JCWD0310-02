export interface User {
  id : number | null;
  userName: string;
  email: string;
  password: string;
  passwordHash: string;
  token: string;
  role: string;
  detail: {
    // dateOfBirth: Date;
    bio: string;
  };
}
