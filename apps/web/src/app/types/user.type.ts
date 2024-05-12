export interface User {
  userId : number | null;
  firstName: string;
  lastName: string;
  referralCode: string;
  email: string;
  password: string;
  passwordHash: string;
  token: string;
  role: string;
  profile : string;
  detail: {
    // dateOfBirth: Date;
    bio: string;
  };
}
