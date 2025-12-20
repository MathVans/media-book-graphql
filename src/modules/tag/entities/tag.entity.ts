import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Post } from 'src/modules/post/entities/post.entity';
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export class Tag {
  @PrimaryGeneratedColumn()
  @Field(() => Int, { description: 'Example field (placeholder)' })
  id: number;

  @Column()
  @Field()
  name: string;

  @Field(() => [Post])
  @ManyToMany(() => Post, (post) => post.tags)
  posts: Promise<Post[]>;
}
