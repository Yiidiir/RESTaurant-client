export interface IUser {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  role: number;
  api_token: string;
  join_date?: string;
  phone_number?: string;
}
