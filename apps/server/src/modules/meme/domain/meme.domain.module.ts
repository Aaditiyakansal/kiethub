import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { DatabaseHelperModule } from '../../../core/database'
import { MemeDomainFacade } from './meme.domain.facade'
import { Meme } from './meme.model'

@Module({
  imports: [TypeOrmModule.forFeature([Meme]), DatabaseHelperModule],
  providers: [MemeDomainFacade, MemeDomainFacade],
  exports: [MemeDomainFacade],
})
export class MemeDomainModule {}
