import { ColumnNumeric } from '@server/core/database'
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'

import { User } from '../../../modules/user/domain'

import { Meme } from '../../../modules/meme/domain'

@Entity()
export class Like {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({})
  userId: string

  @ManyToOne(() => User, parent => parent.likes)
  @JoinColumn({ name: 'userId' })
  user?: User

  @Column({})
  memeId: string

  @ManyToOne(() => Meme, parent => parent.likes)
  @JoinColumn({ name: 'memeId' })
  meme?: Meme

  @CreateDateColumn()
  dateCreated: string

  @UpdateDateColumn()
  dateUpdated: string

  @DeleteDateColumn()
  dateDeleted: string
}
