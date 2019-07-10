import { IIdentity } from './identity';

export interface IItem extends IIdentity {
  name: string;
  description?: string;
}

export class Item implements IItem {
  public id: number;
  public name: string;
  public description?: string;
}
