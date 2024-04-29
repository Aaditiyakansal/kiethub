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

import { Like } from '../../../modules/like/domain'

@Entity()
export class Meme {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({ nullable: true })
  imageUrl?: string

  @Column({ nullable: true })
  expirationTime?: string

  @Column({})
  userId: string

  @ManyToOne(() => User, parent => parent.memes)
  @JoinColumn({ name: 'userId' })
  user?: User

  @OneToMany(() => Like, child => child.meme)
  likes?: Like[]

  @CreateDateColumn()
  dateCreated: string

  @UpdateDateColumn()
  dateUpdated: string

  @DeleteDateColumn()
  dateDeleted: string
}
