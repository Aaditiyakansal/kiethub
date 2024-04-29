import { User } from '../user'

import { Like } from '../like'

export class Meme {
  id: string

  imageUrl?: string

  expirationTime?: string

  userId: string

  user?: User

  dateCreated: string

  dateDeleted: string

  dateUpdated: string

  likes?: Like[]
}
