import { InputType, Int, Field } from '@nestjs/graphql';
import { IsEmail, IsNumber, IsString, isString } from 'class-validator';

@InputType()
export class CreateUserInput {
  @Field()
  @IsString()
  firstName: string;

  @Field()
  @IsString()
  lastName: string;

  @Field()
  @IsEmail()
  email: string;

  @Field(() => Int)
  @IsNumber()
  age: number;
}
