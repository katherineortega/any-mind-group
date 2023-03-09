import { EUserId, IUser } from "@interfaces/user.interface";

export class User {
  public id: EUserId;
  public name: string;
  public image: string;

  constructor(iUser: IUser) {
    this.id = iUser.id || '';
    this.name = iUser.name || '';
    this.image = iUser.image || '';
  }
}
