import { Module } from '@nestjs/common'
import { SocketModule } from '@server/libraries/socket'
import { AuthorizationDomainModule } from '@server/modules/authorization/domain'
import { NotificationDomainModule } from '../domain'

import { NotificationMemeSubscriber } from './subscribers/notification.meme.subscriber'

import { NotificationLikeSubscriber } from './subscribers/notification.like.subscriber'

@Module({
  imports: [AuthorizationDomainModule, NotificationDomainModule, SocketModule],
  providers: [NotificationMemeSubscriber, NotificationLikeSubscriber],
  exports: [],
})
export class NotificationInfrastructureModule {}
