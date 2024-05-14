export interface User {
  id : number | null;
  userId : number | null;
  firstName: string;
  lastName: string;
  email: string;
  points : number;
  password: string;
  passwordHash: string;
  pictureId? : string;
  token: string;
  role: string;
  profile : string;
  referralCode: string;
  detail: {
    // dateOfBirth: Date;
    bio: string;
  };
}
