import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Post } from 'src/modules/post/entities/post.entity';
import { Profile } from 'src/modules/profile/entities/profile.entity';
import {
  Column,
  Entity,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@ObjectType()
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  @Field(() => Int, { description: 'Identity field' })
  id: number;

  @Column()
  @Field({ description: 'Fist Name' })
  firstName: string;

  @Column()
  @Field({ description: 'Last Name' })
  lastName: string;

  @Column()
  @Field({ description: 'Email' })
  email: string;

  @Column()
  @Field(() => Int, { description: 'Age ' })
  age: number;

  @OneToMany(() => Post, (post) => post.user)
  @Field(() => [Post])
  posts: Promise<Post[]>;

  @OneToOne(() => Profile)
  @Field(() => Profile)
  profile: Promise<Profile>;
}
