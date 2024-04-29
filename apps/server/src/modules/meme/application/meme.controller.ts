import { Request } from 'express'

import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Req,
} from '@nestjs/common'
import { EventService } from '@server/libraries/event'
import { Meme, MemeDomainFacade } from '@server/modules/meme/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { RequestHelper } from '../../../helpers/request'
import { MemeApplicationEvent } from './meme.application.event'
import { MemeCreateDto, MemeUpdateDto } from './meme.dto'

@Controller('/v1/memes')
export class MemeController {
  constructor(
    private eventService: EventService,
    private memeDomainFacade: MemeDomainFacade,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/')
  async findMany(@Req() request: Request) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const items = await this.memeDomainFacade.findMany(queryOptions)

    return items
  }

  @Post('/')
  async create(@Body() body: MemeCreateDto, @Req() request: Request) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const item = await this.memeDomainFacade.create(body)

    await this.eventService.emit<MemeApplicationEvent.MemeCreated.Payload>(
      MemeApplicationEvent.MemeCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }

  @Get('/:memeId')
  async findOne(@Param('memeId') memeId: string, @Req() request: Request) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const item = await this.memeDomainFacade.findOneByIdOrFail(
      memeId,
      queryOptions,
    )

    return item
  }

  @Patch('/:memeId')
  async update(@Param('memeId') memeId: string, @Body() body: MemeUpdateDto) {
    const item = await this.memeDomainFacade.findOneByIdOrFail(memeId)

    const itemUpdated = await this.memeDomainFacade.update(
      item,
      body as Partial<Meme>,
    )
    return itemUpdated
  }

  @Delete('/:memeId')
  async delete(@Param('memeId') memeId: string) {
    const item = await this.memeDomainFacade.findOneByIdOrFail(memeId)

    await this.memeDomainFacade.delete(item)

    return item
  }
}
