export interface IChannel {
  id: EChannelId,
  name: EChannelName
}

export enum EChannelId {
  Default = '0',
  General = '1',
  LGTM = '2',
  Technology = '3'
}

export enum EChannelName {
  General = 'General',
  LGTM = 'LGTM',
  Technology = 'Technology'
}
