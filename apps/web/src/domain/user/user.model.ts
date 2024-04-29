import { Notification } from '../notification'

import { Meme } from '../meme'

import { Like } from '../like'

export enum UserStatus {
  CREATED = 'CREATED',
  VERIFIED = 'VERIFIED',
}
export class User {
  id: string
  email: string
  status: UserStatus
  name: string
  pictureUrl: string
  password: string
  dateCreated: string
  dateUpdated: string
  notifications?: Notification[]

  memes?: Meme[]

  likes?: Like[]
}
