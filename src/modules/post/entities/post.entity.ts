import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Tag } from 'src/modules/tag/entities/tag.entity';
import { User } from 'src/modules/user/entities/user.entity';
import {
  Column,
  Entity,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@ObjectType()
@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  @Field(() => Int, { description: 'Identity' })
  id: number;

  @Column()
  @Field()
  title: string;

  @Column()
  @Field()
  content: string;

  @Field(() => User)
  @ManyToOne(() => User, (user) => user.posts)
  user: Promise<User>;

  @Field(() => [Post])
  @ManyToMany(() => Tag, (tag) => tag.posts)
  tags: Promise<Tag[]>;
}
