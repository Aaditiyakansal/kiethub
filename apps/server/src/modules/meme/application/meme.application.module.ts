import { Module } from '@nestjs/common'
import { AuthenticationDomainModule } from '@server/modules/authentication/domain'
import { MemeDomainModule } from '../domain'
import { MemeController } from './meme.controller'

import { UserDomainModule } from '../../../modules/user/domain'

import { MemeByUserController } from './memeByUser.controller'

@Module({
  imports: [AuthenticationDomainModule, MemeDomainModule, UserDomainModule],
  controllers: [MemeController, MemeByUserController],
  providers: [],
})
export class MemeApplicationModule {}
