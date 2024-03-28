import { IUserAddress } from "./user-address.interface";
import { IUserCompany } from "./user-company.interface";

export interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  address: IUserAddress;
  company: IUserCompany;
}
