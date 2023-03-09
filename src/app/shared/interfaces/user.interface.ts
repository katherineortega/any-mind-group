export interface IUser {
  id: EUserId,
  name: string,
  image: string
}

export enum EUserId {
  Default = 'Default',
  Joyse = 'Joyse',
  Russell = 'Russell',
  Sam = 'Sam'
}
