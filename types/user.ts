
export interface Role {
  id: number;
  name: string;
  code: string;
  description: string;
  role_type_id:string
}
export interface AuthResponse {
  firstLogin: boolean;
  message: string;
  status?: string;
  phone: string;
  tokens?: {access_token: string,refresh_token: string};
  user?:User;
}
export interface User {
  id: number;
  email: string;
  full_name: string;
  sex: string;
  dateOfBirth?: string;
  address?: string;
  phone: string;
  otpCodes: string[];
  roleCode: string;
  role: Role;
  token: string;
  status: string;
  firstLogin: boolean;
}
export interface ApiResponse {
  status: string;
  code: string;
  data: User;
}

export interface Activity {
  id: number;
  name: string;
}

