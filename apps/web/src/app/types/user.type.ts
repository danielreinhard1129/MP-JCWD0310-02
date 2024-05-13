export interface User {
  id : number | null;
  userId : number | null;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  passwordHash: string;
  token: string;
  role: string;
  profile : string;
  referralCode: string;
  detail: {
    // dateOfBirth: Date;
    bio: string;
  };
}
