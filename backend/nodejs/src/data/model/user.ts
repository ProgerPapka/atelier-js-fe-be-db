import { IIdentity } from './identity';

export interface IUser extends IIdentity {
  id: number;
  name: string;
  surname: string;
  middlename?: string;
  phone?: string;
  email: string;
  password: string;
}

export class User implements IUser {
  public id: number;
  public name: string;
  public surname: string;
  public middlename: string;
  public phone: string;
  public email: string;
  public password: string;

  constructor({id, name, surname, middlename, phone, email, password}: IUser) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.middlename = middlename;
    this.phone = phone;
    this.email = email;
    this.password = password;
  }

}
