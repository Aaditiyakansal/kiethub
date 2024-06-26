import { Request } from 'express'

import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common'
import { RequestHelper } from '@server/helpers/request'
import { EventService } from '@server/libraries/event'
import { LikeDomainFacade } from '@server/modules/like/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { LikeApplicationEvent } from './like.application.event'
import { LikeCreateDto } from './like.dto'

import { MemeDomainFacade } from '../../meme/domain'

@Controller('/v1/memes')
export class LikeByMemeController {
  constructor(
    private memeDomainFacade: MemeDomainFacade,

    private likeDomainFacade: LikeDomainFacade,
    private eventService: EventService,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/meme/:memeId/likes')
  async findManyMemeId(
    @Param('memeId') memeId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const parent = await this.memeDomainFacade.findOneByIdOrFail(memeId)

    const items = await this.likeDomainFacade.findManyByMeme(
      parent,
      queryOptions,
    )

    return items
  }

  @Post('/meme/:memeId/likes')
  async createByMemeId(
    @Param('memeId') memeId: string,
    @Body() body: LikeCreateDto,
    @Req() request: Request,
  ) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const valuesUpdated = { ...body, memeId }

    const item = await this.likeDomainFacade.create(valuesUpdated)

    await this.eventService.emit<LikeApplicationEvent.LikeCreated.Payload>(
      LikeApplicationEvent.LikeCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }
}
