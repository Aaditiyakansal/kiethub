import { Module } from '@nestjs/common'
import { AuthenticationDomainModule } from '@server/modules/authentication/domain'
import { LikeDomainModule } from '../domain'
import { LikeController } from './like.controller'

import { UserDomainModule } from '../../../modules/user/domain'

import { LikeByUserController } from './likeByUser.controller'

import { MemeDomainModule } from '../../../modules/meme/domain'

import { LikeByMemeController } from './likeByMeme.controller'

@Module({
  imports: [
    AuthenticationDomainModule,
    LikeDomainModule,

    UserDomainModule,

    MemeDomainModule,
  ],
  controllers: [LikeController, LikeByUserController, LikeByMemeController],
  providers: [],
})
export class LikeApplicationModule {}
