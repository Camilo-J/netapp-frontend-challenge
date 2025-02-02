export interface User {
  name: string | null;
  lastName: string;
  username: string;
  email: string;
  token?: string;
  refreshToken?: string;
}
