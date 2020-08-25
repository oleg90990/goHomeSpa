import { IUserUpdateData } from 'friendshome-api'

export interface LoginPayload {
  mobile: string;
  password: string;
}

export type RegisterPayload = IUserUpdateData
