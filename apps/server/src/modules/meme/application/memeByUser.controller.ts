import { Request } from 'express'

import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common'
import { RequestHelper } from '@server/helpers/request'
import { EventService } from '@server/libraries/event'
import { MemeDomainFacade } from '@server/modules/meme/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { MemeApplicationEvent } from './meme.application.event'
import { MemeCreateDto } from './meme.dto'

import { UserDomainFacade } from '../../user/domain'

@Controller('/v1/users')
export class MemeByUserController {
  constructor(
    private userDomainFacade: UserDomainFacade,

    private memeDomainFacade: MemeDomainFacade,
    private eventService: EventService,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/user/:userId/memes')
  async findManyUserId(
    @Param('userId') userId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const parent = await this.userDomainFacade.findOneByIdOrFail(userId)

    const items = await this.memeDomainFacade.findManyByUser(
      parent,
      queryOptions,
    )

    return items
  }

  @Post('/user/:userId/memes')
  async createByUserId(
    @Param('userId') userId: string,
    @Body() body: MemeCreateDto,
    @Req() request: Request,
  ) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const valuesUpdated = { ...body, userId }

    const item = await this.memeDomainFacade.create(valuesUpdated)

    await this.eventService.emit<MemeApplicationEvent.MemeCreated.Payload>(
      MemeApplicationEvent.MemeCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }
}
