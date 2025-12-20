import { ObjectType, Field, Int } from '@nestjs/graphql';
import { User } from 'src/modules/user/entities/user.entity';
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export class Profile {
  @PrimaryGeneratedColumn()
  @Field(() => Int, { description: 'Identity' })
  id: number;

  @Column()
  @Field()
  avatar: string;

  @Column()
  @Field()
  bio: string;

  @OneToOne(() => User)
  user: Promise<User>;
}
