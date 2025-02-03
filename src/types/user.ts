export interface User {
  id: number;
  name: string | null;
  lastName: string;
  username: string;
  password?: string;
  email: string;
  token?: string;
  refreshToken?: string;
}
