import { User } from '../user'

import { Meme } from '../meme'

export class Like {
  id: string

  userId: string

  user?: User

  memeId: string

  meme?: Meme

  dateCreated: string

  dateDeleted: string

  dateUpdated: string
}
